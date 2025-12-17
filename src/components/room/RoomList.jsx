import { useEffect, useState } from "react";
import axios from "axios";
import "./Room.css";

const RoomList = ({ goBack }) => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/v1/rooms")
            .then(res => setRooms(res.data))
            .catch(() => alert("Error loading rooms"));
    }, []);

    return (
        <div className="room-page">
            <div className="container-room">
                <h1>Registered Rooms</h1>

                <ul className="room-list">
                    {rooms.map(r => (
                        <li key={r.id} className="room-item">
                            <strong>ID:</strong> {r.id}<br/>
                            <strong>Name:</strong> {r.name}<br/>
                            <strong>Capacity:</strong> {r.capacity}<br/>
                            <strong>Floor:</strong> {r.floor}<br/>
                            <strong>Block:</strong> {r.blockId}
                        </li>
                    ))}
                </ul>

                <button onClick={goBack}>Back</button>
            </div>
        </div>
    );
};

export default RoomList;
