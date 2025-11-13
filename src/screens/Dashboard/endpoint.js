// src/services/GPTAssistant.js (or wherever it lives in React)

class GPTAssistant {
    // The constructor no longer needs the keys, or you can remove the class entirely
    // and just use a simple function.
    constructor() {
        // No keys needed here!
    }

    /**
     * Sends the message to the secure Netlify function for processing.
     * The function handles the entire OpenAI Assistant workflow (create thread, run, get response).
     * @param {string} message - The user message to send.
     * @returns {Promise<string>} The AI's response text.
     */
    async sendMessage(message) {
        try {
            // This is the ONLY API call made from the client
            const response = await fetch('/.netlify/functions/openai-proxy', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                // Pass the user message to the function
                body: JSON.stringify({ userPrompt: message }) 
            });

            if (!response.ok) {
                // If the function returns an error status (e.g., 500)
                const errorData = await response.json();
                throw new Error(`AI Service Error: ${errorData.error || response.statusText}`);
            }

            const data = await response.json();
            return data.aiMessage; // Expecting the final response text
        } catch (error) {
            console.error("Communication with AI failed:", error);
            return "Sorry, I couldn't get a response from the assistant.";
        }
    }
}

export default GPTAssistant;