import { useState } from "react";
import RoomCreate from "./RoomCreate";
import RoomList from "./RoomList";
import RoomFind from "./RoomFind";
import RoomUpdate from "./RoomUpdate";
import RoomDelete from "./RoomDelete";
import "./Room.css";

const RoomPage = ({ goBack }) => {
    const [view, setView] = useState("menu");

    const renderView = () => {
        switch (view) {
            case "create":
                return <RoomCreate goBack={() => setView("menu")} />;
            case "list":
                return <RoomList goBack={() => setView("menu")} />;
            case "find":
                return <RoomFind goBack={() => setView("menu")} />;
            case "update":
                return <RoomUpdate goBack={() => setView("menu")} />;
            case "delete":
                return <RoomDelete goBack={() => setView("menu")} />;
            default:
                return (
                    <div className="container room-menu-container">
                        <h1>Room Menu</h1>
                        <div className="button-group" style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%' }}>
                            <button onClick={() => setView("create")}>Register Room</button>
                            <button onClick={() => setView("list")}>List All Rooms</button>
                            <button onClick={() => setView("find")}>Find Room</button>
                            <button onClick={() => setView("update")}>Update Room</button>
                            <button onClick={() => setView("delete")}>Delete Room</button>

                            <button type="button" className="secondary-button" onClick={goBack} style={{ marginTop: '20px' }}>
                                Back to Home
                            </button>
                        </div>
                    </div>
                );
        }
    };

    return <div className="room-page">{renderView()}</div>;
};

export default RoomPage;