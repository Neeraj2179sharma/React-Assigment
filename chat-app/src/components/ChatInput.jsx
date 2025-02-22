import React, { useState } from "react";
import { Send, Smile } from "lucide-react";

export default function ChatInput({ sendMessage }) {
    const [newMessage, setNewMessage] = useState("");

    const handleSend = () => {
        sendMessage(newMessage);
        setNewMessage("");
    };

    return (
        <div className="chat-input">
            <Smile size={22} className="icon" />
            <input
                type="text"
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend} disabled={!newMessage.trim()}>
                <Send size={22} />
            </button>
        </div>
    );
}
