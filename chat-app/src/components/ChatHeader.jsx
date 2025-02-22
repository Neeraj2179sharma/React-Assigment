import React from "react";
import { MoreVertical, Phone, Video } from "lucide-react";

export default function ChatHeader() {
    return (
        <div className="chat-header">
            <div className="chat-user">
                <div className="avatar">S</div>
                <div>
                    <h3>Support</h3>
                    <p className="status">Online</p>
                </div>
            </div>
            <div className="chat-actions">
                <Phone size={20} className="icon" />
                <Video size={20} className="icon" />
                <MoreVertical size={20} className="icon" />
            </div>
        </div>
    );
}
