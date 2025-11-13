// netlify/functions/openai-proxy.js

// ⚠️ Note: For serverless functions, you often need to use the
// official 'openai' library's Node.js methods instead of fetch, 
// or ensure 'node-fetch' is installed if you stick to fetch.
// The structure below adapts your fetch-based logic for a Netlify handler.

class GPTAssistantServer {
    // Get the keys securely from the Netlify environment
    constructor() {
        this.apiKey = process.env.OPEN_AI_KEY; 
        this.assistantId = process.env.AGENT_KEY; // Renamed to avoid REACT_APP_
        this.baseUrl = "https://api.openai.com/v1";

        if (!this.apiKey || !this.assistantId) {
            throw new Error("Missing required environment keys.");
        }
    }

    getHeaders() {
        return {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${this.apiKey}`,
            "OpenAI-Beta": "assistants=v2"
        };
    }
    
    // ⚠️ KEEP ALL ORIGINAL ASYNC METHODS (sendMessage, createThread, etc.) HERE
    // They will now run on the server and use the secure keys.
    // ... (All your original methods like sendMessage, createThread, etc. go here) ...
    // Make sure they use 'this.getHeaders()' which now uses the secure keys.
    
    // Example: Only showing the main function and one helper method:
    
    async createThread() {
        const response = await fetch(`${this.baseUrl}/threads`, {
            method: "POST",
            headers: this.getHeaders(),
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Failed to create thread: ${errorData.message || response.statusText}`);
        }
        return await response.json();
    }
    
    // ... all other methods like addMessageToThread, runAssistant, getFinalResponse ...
    
    async sendMessage(message) {
        // ... (The full logic from your original sendMessage method) ...
        // This runs on the server now.
        const thread = await this.createThread();
        await this.addMessageToThread(thread.id, message);
        // ... (rest of the run and status check logic) ...
        const runId = await this.runAssistant(thread.id, this.assistantId); 
        let status = "queued"; 
        while (status !== "completed" && status !== "failed" && status !== "cancelled") {
            await new Promise(resolve => setTimeout(resolve, 1000));
            const runStatusResponse = await fetch(`${this.baseUrl}/threads/${thread.id}/runs/${runId}`, {
                method: "GET",
                headers: this.getHeaders(),
            });
            const runData = await runStatusResponse.json();
            status = runData.status;

            if (status === "failed" || status === "cancelled" || status === "expired") {
                throw new Error(`Run failed with status: ${status}. Last error: ${JSON.stringify(runData.last_error)}`);
            }
        }
        return await this.getFinalResponse(thread.id);
    }
}

// Netlify Function Handler
exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    try {
        const { userPrompt } = JSON.parse(event.body);
        
        // Initialize the class and run the entire workflow on the server
        const assistant = new GPTAssistantServer();
        const aiMessage = await assistant.sendMessage(userPrompt);

        // Return the final result back to the client
        return {
            statusCode: 200,
            body: JSON.stringify({ aiMessage }),
        };

    } catch (error) {
        console.error("Function Error:", error.message);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: `Internal Server Error: ${error.message}` }),
        };
    }
};