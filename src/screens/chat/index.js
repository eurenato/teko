// ChatInterface.jsx
import React, { useState, useEffect, useRef } from 'react';
import ChatWindow from '../../components/ChatWindow/ChatWindow';
import MessageInput from '../../components/MessageInput/MessageInput';
import GPTassistant from '../Dashboard/endpoint'; // Assuming correct path to your AI assistant
import { useLocation } from 'react-router-dom';

export default function ChatInterface() {
  const [messages, setMessages] = useState([]);
  const assistantRef = useRef(null);
  const location = useLocation();

  const initialMessagesSet = useRef(false);

  useEffect(() => {
    if (initialMessagesSet.current) return;
    initialMessagesSet.current = true;

    // Get the hourlyData and optional diarioTotal from location state
    const hourlyData = location.state?.hourlyData || {};
    const diarioTotal = location.state?.diarioTotal || 0; // Use the total if passed

    assistantRef.current = new GPTassistant();

    // Initial AI welcome message
    setMessages([{ text: "Olá! Sou o Tekomente, seu assistente virtual para te ajudar a usar melhor as informações de sua Tekolixeira. Posso tirar métricas dos dados da sua coleta e sugerir seus próximos passos. Como posso ajudar você hoje?", sender: 'ai' }]);

    // Construct the detailed user message if hourlyData is available
    if (Object.keys(hourlyData).length > 0) {
      let detailedMessage = `Olá, Tekomente! Aqui estão os dados de coleta de lixo por hora do dia de hoje:\n\n`;

      // Sort the hours to ensure they are in chronological order
      const sortedHours = Object.keys(hourlyData).sort((a, b) => {
        const hourA = parseInt(a.split(':')[0], 10);
        const hourB = parseInt(b.split(':')[0], 10);
        return hourA - hourB;
      });

      sortedHours.forEach(hour => {
        const weight = hourlyData[hour];
        // Only include hours that actually had some collection, or you can include all for completeness
        // If you want to show ALL hours, even if 0, remove the `if (weight > 0)` check
        if (weight > 0) {
          detailedMessage += `- Às ${hour}: ${weight.toFixed(2)} kgs\n`;
        }
      });

      detailedMessage += `\nO total coletado hoje foi de ${diarioTotal} kgs. Que insights podemos ter em relação ao peso e aos horários de coleta?`;

      // Simulate the user sending this detailed message
      handleSendMessage(detailedMessage);
    } else {
      // Fallback if no hourly data is available
      handleSendMessage(`Olá, Tekomente! Não tenho os dados detalhados por hora no momento, mas o total coletado hoje foi de ${diarioTotal} kgs. Que insights podemos ter sobre isso?`);
    }

  }, []); // Empty dependency array, runs once on mount

  const handleSendMessage = async (text) => {
    setMessages((prevMessages) => [...prevMessages, { text, sender: 'user' }]);

    if (!assistantRef.current) {
      console.error("GPTassistant não está inicializado.");
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Desculpe, o sistema de IA não está pronto. Tente novamente.", sender: 'ai' },
      ]);
      return;
    }

    try {
      const aiResponse = await assistantRef.current.sendMessage(text);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: aiResponse, sender: 'ai' },
      ]);
    } catch (error) {
      console.error("Erro ao obter resposta da IA:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Desculpe, houve um erro ao processar sua solicitação com a IA.", sender: 'ai' },
      ]);
    }
  };

  return (
    <div className="chat-interface">
      <ChatWindow messages={messages} />
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
}