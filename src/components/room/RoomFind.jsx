import { useState } from "react";
import axios from "axios";
import "./Room.css";

const RoomFind = ({ goBack }) => {
    const [id, setId] = useState("");
    const [room, setRoom] = useState(null);

    const findRoom = async () => {
        try {
            const res = await axios.get(`http://localhost:8080/api/v1/rooms/${id}`);
            setRoom(res.data);
        } catch {
            alert("Room not found");
        }
    };

    return (
        <div className="room-page">
            <div className="container-room">
                <h1>Find Room</h1>

                <input placeholder="Room ID" value={id} onChange={e => setId(e.target.value)} />
                <button onClick={findRoom}>Search</button>

                {room && (
                    <div className="room-item">
                        <p><strong>Name:</strong> {room.name}</p>
                        <p><strong>Capacity:</strong> {room.capacity}</p>
                        <p><strong>Floor:</strong> {room.floor}</p>
                    </div>
                )}

                <button onClick={goBack}>Back</button>
            </div>
        </div>
    );
};

export default RoomFind;
