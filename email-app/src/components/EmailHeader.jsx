import React from "react";
import { Search, Settings, Bell } from "lucide-react";

export default function EmailHeader() {
    return (
        <div className="email-header">
            <h2>Inbox</h2>
            <div className="email-actions">
                <Search size={20} className="icon" />
                <Bell size={20} className="icon" />
                <Settings size={20} className="icon" />
            </div>
        </div>
    );
}
