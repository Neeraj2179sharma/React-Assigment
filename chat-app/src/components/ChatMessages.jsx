import React from "react";

export default function ChatMessages({ messages }) {
    return (
        <div className="chat-messages">
            {messages.map((msg) => (
                <div key={msg.id} className={`message ${msg.isUser ? "sent" : "received"}`}>
                    <p className="message-text">{msg.content}</p>
                    <span className="message-time">{msg.timestamp}</span>
                </div>
            ))}
        </div>
    );
}
