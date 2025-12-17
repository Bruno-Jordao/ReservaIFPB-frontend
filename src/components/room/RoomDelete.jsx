import { useState } from "react";
import axios from "axios";
import "./Room.css";

const RoomDelete = ({ goBack }) => {
    const [id, setId] = useState("");

    const deleteRoom = async () => {
        try {
            await axios.delete(`http://localhost:8080/api/v1/rooms/${id}`);
            alert("Room deleted!");
        } catch {
            alert("Error deleting room");
        }
    };

    return (
        <div className="room-page">
            <div className="container-room">
                <h1>Delete Room</h1>

                <input placeholder="Room ID" value={id} onChange={e => setId(e.target.value)} />

                <button onClick={deleteRoom}>Delete</button>
                <button onClick={goBack}>Back</button>
            </div>
        </div>
    );
};

export default RoomDelete;
