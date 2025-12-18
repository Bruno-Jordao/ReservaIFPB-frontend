import { useState } from "react";
import axios from "axios";
import "./Reservation.css";

const ReservationRegister = ({ goBack }) => {
    const [teacherId, setTeacherId] = useState("");
    const [roomId, setRoomId] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [description, setDescription] = useState("");
    const [activity, setActivity] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        const reservationData = {
            teacherId: Number(teacherId),
            roomId: Number(roomId),
            startTime,
            endTime,
            description,
            activity
        };
        try {
            const response = await axios.post("http://localhost:8080/api/v1/reservations", reservationData);
            alert("Reservation created successfully! ID: " + response.data.id);
            goBack();
        } catch (error) {
            alert(error.response?.data?.message || "Error creating reservation.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <h1>Register Reservation</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-field">
                    <input type="number" placeholder='Teacher ID' value={teacherId} onChange={(e) => setTeacherId(e.target.value)} required />
                </div>
                <div className="input-field">
                    <input type="number" placeholder='Room ID' value={roomId} onChange={(e) => setRoomId(e.target.value)} required />
                </div>
                <div className="input-field">
                    <label>Start Time:</label>
                    <input type="datetime-local" value={startTime} onChange={(e) => setStartTime(e.target.value)} required />
                </div>
                <div className="input-field">
                    <label>End Time:</label>
                    <input type="datetime-local" value={endTime} onChange={(e) => setEndTime(e.target.value)} required />
                </div>
                <div className="input-field">
                    <input type="text" placeholder='Activity (e.g., Class)' value={activity} onChange={(e) => setActivity(e.target.value)} required />
                </div>
                <div className="input-field">
                    <input type="text" placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} required />
                </div>

                <button disabled={loading}>
                    {loading ? "Registering..." : "Confirm Reservation"}
                </button>
                <button type="button" className="secondary-button" onClick={goBack}>
                    Back
                </button>
            </form>
        </div>
    );
}

export default ReservationRegister;