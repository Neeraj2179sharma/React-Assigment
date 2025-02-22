import React, { useState } from "react";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import "../styles/ChatApp.css";

export default function ChatApp() {
    const [messages, setMessages] = useState([
        {
            id: 1,
            content: "Hello! How can I assist you today?",
            sender: "Support",
            timestamp: "10:30 AM",
            isUser: false,
        },
        {
            id: 2,
            content: "I have a question about my subscription.",
            sender: "You",
            timestamp: "10:31 AM",
            isUser: true,
        },
    ]);

    const sendMessage = (text) => {
        if (!text.trim()) return;
        setMessages([
            ...messages,
            {
                id: messages.length + 1,
                content: text,
                sender: "You",
                timestamp: new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                }),
                isUser: true,
            },
        ]);
    };

    return (
        <div className="chat-container">
            <ChatHeader />
            <ChatMessages messages={messages} />
            <ChatInput sendMessage={sendMessage} />
        </div>
    );
}
