import { useState } from "react";
import axios from "axios";
import "./Room.css";

const RoomUpdate = ({ goBack }) => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [capacity, setCapacity] = useState("");
    const [blockId, setBlockId] = useState("");
    const [floor, setFloor] = useState("");

    const updateRoom = async () => {
        try {
            await axios.put(`http://localhost:8080/api/v1/rooms/${id}`, {
                name,
                capacity: Number(capacity),
                blockId: Number(blockId),
                floor
            });

            alert("Room updated!");
        } catch {
            alert("Error updating room");
        }
    };

    return (
        <div className="room-page">
            <div className="container-room">
                <h1>Update Room</h1>

                <input placeholder="Room ID" value={id} onChange={e => setId(e.target.value)} />
                <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                <input placeholder="Capacity" type="number" value={capacity} onChange={e => setCapacity(e.target.value)} />
                <input placeholder="Block ID" type="number" value={blockId} onChange={e => setBlockId(e.target.value)} />
                <input placeholder="Floor" value={floor} onChange={e => setFloor(e.target.value)} />

                <button onClick={updateRoom}>Update</button>
                <button onClick={goBack}>Back</button>
            </div>
        </div>
    );
};

export default RoomUpdate;
