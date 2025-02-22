import React, { useState } from "react";
import EmailHeader from "./EmailHeader";
import EmailSidebar from "./EmailSidebar";
import EmailList from "./EmailList";
import EmailContent from "./EmailContent";
import "../Styles/EmailApp.css";

export default function EmailApp() {
    const [selectedEmail, setSelectedEmail] = useState(null);

    const emails = [
        {
            id: 1,
            sender: "support@example.com",
            subject: "Subscription Renewal Notice",
            preview: "Your subscription is about to expire. Renew now!",
            time: "10:30 AM",
            content: "Dear user, your subscription will expire soon. Please renew to continue enjoying our services.",
        },
        {
            id: 2,
            sender: "noreply@company.com",
            subject: "Welcome to Our Platform!",
            preview: "Thank you for signing up. Here's what to do next...",
            time: "9:15 AM",
            content: "Welcome to our platform! Here’s everything you need to get started.",
        },
    ];

    return (
        <div className="email-container">
            <EmailHeader />
            <div className="email-body">
                <EmailSidebar />
                <EmailList emails={emails} onSelectEmail={setSelectedEmail} />
                {selectedEmail && <EmailContent email={selectedEmail} />}
            </div>
        </div>
    );
}
