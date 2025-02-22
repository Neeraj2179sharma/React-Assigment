import React from "react";

export default function EmailContent({ email }) {
    return (
        <div className="email-content">
            <h3>{email.subject}</h3>
            <p className="sender">{email.sender}</p>
            <p className="email-body">{email.content}</p>
        </div>
    );
}
