import React from "react";

// Remote micro-frontends
const ChatApp = React.lazy(() => import("chat/ChatApp"));
const EmailApp = React.lazy(() => import("email/EmailApp"));

export default function MicroFrontendView({ view }) {
    return (
        <div className="microfrontend-view">
            <React.Suspense fallback={<p>Loading {view}...</p>}>
                {view === "chat" && <ChatApp />}
                {view === "email" && <EmailApp />}
            </React.Suspense>
        </div>
    );
}
