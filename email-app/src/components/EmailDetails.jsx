import React from "react";

export default function EmailDetails({ email }) {
    return (
        <div className="email-details">
            {email ? (
                <>
                    <h2>{email.subject}</h2>
                    <p><strong>From:</strong> {email.sender}</p>
                    <p>{email.content}</p>
                </>
            ) : (
                <p className="no-email">Select an email to view details.</p>
            )}
        </div>
    );
}
