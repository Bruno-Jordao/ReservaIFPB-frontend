import { useState } from "react";
import axios from "axios";
import "./Room.css";

const RoomCreate = ({ goBack }) => {
    const [name, setName] = useState("");
    const [capacity, setCapacity] = useState("");
    const [blockId, setBlockId] = useState("");
    const [floor, setFloor] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post("http://localhost:8080/api/v1/rooms", {
                name,
                capacity: Number(capacity),
                blockId: Number(blockId),
                floor
            });

            alert("Room created successfully!");
            setName("");
            setCapacity("");
            setBlockId("");
            setFloor("");
        } catch (error) {
            console.error(error);
            alert("Error creating room");
        }
    };

    return (
        <div className="room-page">
            <div className="container-room">
                <form onSubmit={handleSubmit}>
                    <h1>Register Room</h1>

                    <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                    <input placeholder="Capacity" type="number" value={capacity} onChange={e => setCapacity(e.target.value)} />
                    <input placeholder="Block ID" type="number" value={blockId} onChange={e => setBlockId(e.target.value)} />
                    <input placeholder="Floor" value={floor} onChange={e => setFloor(e.target.value)} />

                    <button>Create</button>
                    <button type="button" onClick={goBack}>Back</button>
                </form>
            </div>
        </div>
    );
};

export default RoomCreate;
