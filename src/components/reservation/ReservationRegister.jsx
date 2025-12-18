import { useState } from "react";
import axios from "axios";
import "./Reservation.css";

const ReservationRegister = ({ goBack }) => {
    const [roomId, setRoomId] = useState("");
    const [teacherId, setTeacherId] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [activity, setActivity] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8080/api/v1/reservations", {
                roomId, teacherId, startTime, endTime, activity, description
            });
            alert("Reservation created successfully!");
            goBack();
        } catch (error) {
            alert("Error creating reservation. Check for schedule conflicts.");
        }
    };

    return (
        <div className="reservation-page">
            <div className="container-reservation">
                <form onSubmit={handleSubmit}>
                    <h1>New Reservation</h1>
                    <input type="number" placeholder="Room ID" value={roomId} onChange={e => setRoomId(e.target.value)} required />
                    <input type="number" placeholder="Teacher ID" value={teacherId} onChange={e => setTeacherId(e.target.value)} required />

                    <div className="info-text" style={{fontSize: '12px', marginBottom: '-5px', color: '#fff'}}>Start Time:</div>
                    <input type="datetime-local" value={startTime} onChange={e => setStartTime(e.target.value)} required />

                    <div className="info-text" style={{fontSize: '12px', marginBottom: '-5px', color: '#fff'}}>End Time:</div>
                    <input type="datetime-local" value={endTime} onChange={e => setEndTime(e.target.value)} required />

                    <input placeholder="Activity (e.g. Class)" value={activity} onChange={e => setActivity(e.target.value)} required />
                    <textarea placeholder="Description (optional)" value={description} onChange={e => setDescription(e.target.value)} />

                    <button type="submit">Register</button>
                    <button type="button" onClick={goBack}>Back</button>
                </form>
            </div>
        </div>
    );
};

export default ReservationRegister;