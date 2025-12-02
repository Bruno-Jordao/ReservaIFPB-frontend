import { useState } from "react";
import axios from "axios";
import "./Room.css";

const Room = () => {

    const [name, setName] = useState("");
    const [capacity, setCapacity] = useState("");
    const [blockId, setBlockId] = useState("");
    const [floor, setFloor] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post("http://localhost:8080/api/v1/rooms", {
                name: name,
                capacity: Number(capacity),
                blockId: Number(blockId),
                floor: floor
            });

            console.log(response.data);
            alert("Room created successfully!");

        } catch (error) {
            console.error(error);
            alert("Error creating room");
        }
    };

    return (
        <div className="container-room">
            <form onSubmit={handleSubmit}>
                <h1>Register a new Room</h1>

                <div className="input-field">
                    <input 
                        type="text"
                        placeholder="Room name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="input-field">
                    <input 
                        type="number"
                        placeholder="Capacity"
                        onChange={(e) => setCapacity(e.target.value)}
                    />
                </div>

                <div className="input-field">
                    <input 
                        type="number"
                        placeholder="Block ID"
                        onChange={(e) => setBlockId(e.target.value)}
                    />
                </div>

                <div className="input-field">
                    <input 
                        type="text"
                        placeholder="Floor"
                        onChange={(e) => setFloor(e.target.value)}
                    />
                </div>

                <button>Create Room</button>
            </form>
        </div>
    );
};

export default Room;
