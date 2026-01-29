import { useState } from "react";
import RoomList from "./RoomList";
import RoomCreate from "./RoomCreate";
import RoomUpdate from "./RoomUpdate";

const RoomPage = () => {
    const [view, setView] = useState("list");
    const [selectedRoom, setSelectedRoom] = useState(null);

    const handleEdit = (room) => {
        setSelectedRoom(room);
        setView("update");
    };

    return (
        <div className="room-management">
            <div className="room-actions">
                <button onClick={() => setView("list")}>Listar Salas</button>
                <button onClick={() => setView("create")}>Nova Sala</button>
            </div>

            <div className="room-content">
                {view === "list" && (
                    <RoomList onEdit={handleEdit} />
                )}

                {view === "create" && (
                    <RoomCreate goBack={() => setView("list")} />
                )}

                {view === "update" && (
                    <RoomUpdate
                        room={selectedRoom}
                        goBack={() => {
                            setSelectedRoom(null);
                            setView("list");
                        }}
                    />
                )}
            </div>
        </div>
    );
};

export default RoomPage;