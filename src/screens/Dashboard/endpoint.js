class GPTAssistant {
    constructor(apiKey=env.process.env.REACT_APP_OPEN_AI_KEY, assistantId=env.process.env.REACT_APP_AGENT_KEY) {
        this.apiKey = apiKey;
        this.assistantId = assistantId;
        this.baseUrl = "https://api.openai.com/v1";
    }

   async sendMessage(message) {
    const thread = await this.createThread();
    await this.addMessageToThread(thread.id, message);
    
    // Agora o runAssistant precisa do threadId E do assistantId
    const runId = await this.runAssistant(thread.id, this.assistantId); 

    // O loop de verificação do status do run é crucial para esperar a IA processar
    let status = "queued"; // ou "in_progress"
    while (status !== "completed" && status !== "failed" && status !== "cancelled") {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Espera 1 segundo
        const runStatusResponse = await fetch(`${this.baseUrl}/threads/${thread.id}/runs/${runId}`, {
            method: "GET",
            headers: this.getHeaders(),
        });
        const runData = await runStatusResponse.json();
        status = runData.status;

        // Opcional: logar o status para depuração
        // console.log(`Run status: ${status}`);

        // Adicionar tratamento para possíveis erros durante o run
        if (status === "failed" || status === "cancelled" || status === "expired") {
            throw new Error(`Run failed with status: ${status}. Last error: ${JSON.stringify(runData.last_error)}`);
        }
    }

    return await this.getFinalResponse(thread.id); // getFinalResponse não precisa mais do runId, apenas do threadId
  }

  async createThread() {
    const response = await fetch(`${this.baseUrl}/threads`, {
      method: "POST",
      headers: this.getHeaders(),
    });
    if (!response.ok) { // Trate erros da API
        const errorData = await response.json();
        throw new Error(`Failed to create thread: ${errorData.message || response.statusText}`);
    }
    return await response.json();
  }

  async addMessageToThread(threadId, message) {
    const response = await fetch(`${this.baseUrl}/threads/${threadId}/messages`, {
      method: "POST",
      headers: this.getHeaders(),
      body: JSON.stringify({ role: "user", content: message }),
    });
    if (!response.ok) { // Trate erros da API
        const errorData = await response.json();
        throw new Error(`Failed to add message to thread: ${errorData.message || response.statusText}`);
    }
    return await response.json();
  }

  // Este método agora recebe o assistantId
  async runAssistant(threadId, assistantId) {
    const response = await fetch(`${this.baseUrl}/threads/${threadId}/runs`, {
      method: "POST",
      headers: this.getHeaders(),
      body: JSON.stringify({ assistant_id: assistantId }), // <-- AQUI É ONDE O assistant_id ENTRA!
    });
    if (!response.ok) { // Trate erros da API
        const errorData = await response.json();
        throw new Error(`Failed to create run: ${errorData.message || response.statusText}`);
    }
    return (await response.json()).id;
  }

  // O getFinalResponse agora apenas busca as mensagens após o loop de status na sendMessage
  async getFinalResponse(threadId) {
    const messagesResponse = await fetch(`${this.baseUrl}/threads/${threadId}/messages?order=desc&limit=1`, {
        method: "GET",
        headers: this.getHeaders(),
    });
    if (!messagesResponse.ok) { // Trate erros da API
        const errorData = await messagesResponse.json();
        throw new Error(`Failed to fetch messages: ${errorData.message || messagesResponse.statusText}`);
    }

    const messagesData = await messagesResponse.json();
    
    // Verifique se há mensagens e se a última mensagem é do assistente e é do tipo 'text'
    const aiMessage = messagesData.data.find(
        msg => msg.role === 'assistant' && msg.content && msg.content[0]?.type === 'text'
    );
    
    if (aiMessage && aiMessage.content[0]) {
      return aiMessage.content[0].text.value;
    }
    return "Nenhuma resposta válida encontrada do assistente.";
  }

  getHeaders() {
    return {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${this.apiKey}`,
      "OpenAI-Beta": "assistants=v2"
    };
  }
}

export default GPTAssistant;