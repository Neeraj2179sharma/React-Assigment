import React from "react";
import { Bell, MessageSquare, Mail, UserCircle } from "lucide-react"; // Icons for better UI

export default function Header() {
    return (
        <header className="header">
            {/* Left Side - Title */}
            <div className="header-title">
                <h2>Dashboard</h2>
            </div>

            {/* Right Side - Icons */}
            <div className="header-actions">
                <div className="action-icon">
                    <MessageSquare size={22} /> {/* Chat App Indicator */}
                    <span className="badge">3</span> {/* Unread Chats */}
                </div>
                <div className="action-icon">
                    <Mail size={22} /> {/* Email App Indicator */}
                    <span className="badge">5</span> {/* Unread Emails */}
                </div>
                <div className="action-icon">
                    <Bell size={22} /> {/* Notifications */}
                    <span className="badge">2</span> {/* Alerts */}
                </div>
                <UserCircle size={28} className="profile-icon" /> {/* Profile Avatar */}
            </div>
        </header>
    );
}
