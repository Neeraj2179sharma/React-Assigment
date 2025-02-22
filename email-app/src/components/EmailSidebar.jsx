import React from "react";

export default function EmailSidebar() {
    return (
        <div className="email-sidebar">
            <button className="compose-btn">+ Compose</button>
            <ul className="email-menu">
                <li className="active">Inbox</li>
                <li>Sent</li>
                <li>Drafts</li>
                <li>Spam</li>
                <li>Trash</li>
            </ul>
        </div>
    );
}
