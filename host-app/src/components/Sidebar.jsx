import React from "react";
import { MessageSquare, Mail } from "lucide-react";
export default function Sidebar({ setView }) {
    return (
        <aside className="sidebar">
            <button onClick={() => setView("chat")}>
                <MessageSquare size={20} /> Chat App
            </button>
            <button onClick={() => setView("email")}>
                <Mail size={20} /> Email App
            </button>
        </aside>
    );
}
