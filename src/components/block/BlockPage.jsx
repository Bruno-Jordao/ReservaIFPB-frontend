import { useState } from "react";
import BlockCreate from "./BlockCreate";
import BlockList from "./BlockList";
import BlockFind from "./BlockFind";
import BlockUpdate from "./BlockUpdate";
import BlockDelete from "./BlockDelete";
import "./Block.css";

const BlockPage = ({ goBack }) => {
    const [view, setView] = useState("menu");

    const renderView = () => {
        switch (view) {
            case "create":
                return <BlockCreate goBack={() => setView("menu")} />;
            case "list":
                return <BlockList goBack={() => setView("menu")} />;
            case "find":
                return <BlockFind goBack={() => setView("menu")} />;
            case "update":
                return <BlockUpdate goBack={() => setView("menu")} />;
            case "delete":
                return <BlockDelete goBack={() => setView("menu")} />;
            default:
                return (
                    <div className="container block-menu-container">
                        <h1>Block Menu</h1>
                        <div className="button-group" style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%' }}>
                            <button onClick={() => setView("create")}>Register Block</button>
                            <button onClick={() => setView("list")}>List All</button>
                            <button onClick={() => setView("find")}>Find by ID</button>
                            <button onClick={() => setView("update")}>Update Block</button>
                            <button onClick={() => setView("delete")}>Delete Block</button>

                            <button type="button" className="secondary-button" onClick={goBack} style={{ marginTop: '20px' }}>
                                Back to Home
                            </button>
                        </div>
                    </div>
                );
        }
    };

    return <div className="block-page">{renderView()}</div>;
};

export default BlockPage;