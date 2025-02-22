import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MicroFrontendView from "./MicroFrontendView";
import "../Styles/HostApp.css";

export default function HostApp() {
    const [view, setView] = useState("chat");

    return (
        <div className="host-app">
            <Header />
            <div className="content">
                <Sidebar setView={setView} />
                <MicroFrontendView view={view} />
            </div>
        </div>
    );
}
