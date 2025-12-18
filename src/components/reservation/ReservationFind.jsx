import { useState } from "react";
import axios from "axios";
import "./Reservation.css";

const ReservationFind = ({ goBack }) => {
    const [id, setId] = useState("");
    const [reservation, setReservation] = useState(null);

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/v1/reservations/${id}`);
            setReservation(response.data);
        } catch (error) {
            alert("Reservation not found.");
            setReservation(null);
        }
    };

    return (
        <div className="container">
            <h1>Find Reservation</h1>
            <div className="input-field">
                <input type="number" placeholder="Enter Reservation ID" value={id} onChange={e => setId(e.target.value)} />
            </div>
            <button onClick={handleSearch}>Search</button>

            {reservation && (
                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    <p><strong>Activity:</strong> {reservation.activity}</p>
                    <p><strong>Description:</strong> {reservation.description}</p>
                    <p><strong>Start Time:</strong> {new Date(reservation.startTime).toLocaleString()}</p>
                </div>
            )}
            <button className="secondary-button" onClick={goBack}>Back</button>
        </div>
    );
};

export default ReservationFind;