import { useState } from "react";
import CampusCreate from "./CampusCreate";
import CampusList from "./CampusList";
import CampusFind from "./CampusFind";
import CampusUpdate from "./CampusUpdate";
import CampusDelete from "./CampusDelete";
import "./Campus.css";

const CampusPage = ({ goBack }) => {
    const [view, setView] = useState("menu");

    const renderView = () => {
        switch (view) {
            case "create":
                return <CampusCreate goBack={() => setView("menu")} />;
            case "list":
                return <CampusList goBack={() => setView("menu")} />;
            case "find":
                return <CampusFind goBack={() => setView("menu")} />;
            case "update":
                return <CampusUpdate goBack={() => setView("menu")} />;
            case "delete":
                return <CampusDelete goBack={() => setView("menu")} />;
            default:
                return (
                    <div className="container campus-menu-container">
                        <h1>Campus Menu</h1>
                        <div className="button-group" style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%' }}>
                            <button onClick={() => setView("create")}>Register Campus</button>
                            <button onClick={() => setView("list")}>List All</button>
                            <button onClick={() => setView("find")}>Find by ID</button>
                            <button onClick={() => setView("update")}>Update Campus</button>
                            <button onClick={() => setView("delete")}>Delete Campus</button>

                            <button type="button" className="secondary-button" onClick={goBack} style={{ marginTop: '20px' }}>
                                Back to Home
                            </button>
                        </div>
                    </div>
                );
        }
    };

    return <div className="campus-page">{renderView()}</div>;
};

export default CampusPage;