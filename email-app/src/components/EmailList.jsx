import React from "react";

export default function EmailList({ emails, onSelectEmail }) {
    return (
        <div className="email-list">
            {emails.map((email) => (
                <div key={email.id} className="email-item" onClick={() => onSelectEmail(email)}>
                    <h4>{email.sender}</h4>
                    <p className="subject">{email.subject}</p>
                    <p className="preview">{email.preview}</p>
                    <span className="time">{email.time}</span>
                </div>

            ))}
        </div>
    );
}
