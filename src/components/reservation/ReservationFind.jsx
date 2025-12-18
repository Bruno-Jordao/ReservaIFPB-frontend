import { useState } from "react";
import axios from "axios";
import "./Reservation.css";

const ReservationFind = ({ goBack }) => {
    const [id, setId] = useState("");
    const [teacherId, setTeacherId] = useState("");
    const [reservation, setReservation] = useState(null);

    const handleSearchById = async () => {
        try {
            const res = await axios.get(`http://localhost:8080/api/v1/reservations/${id}`);
            setReservation(res.data);
        } catch { alert("Reservation not found"); }
    };

    return (
        <div className="reservation-page">
            <div className="container-reservation">
                <h1>Find Reservation</h1>
                <input placeholder="Reservation ID" value={id} onChange={e => setId(e.target.value)} />
                <button onClick={handleSearchById}>Search by ID</button>

                {reservation && (
                    <div className="result-box" style={{textAlign: 'left', marginTop: '15px', color: '#fff'}}>
                        <p><strong>Room:</strong> {reservation.room?.name}</p>
                        <p><strong>Teacher:</strong> {reservation.teacher?.name}</p>
                        <p><strong>Activity:</strong> {reservation.activity}</p>
                    </div>
                )}
                <button onClick={goBack} style={{marginTop: '10px'}}>Back</button>
            </div>
        </div>
    );
};

export default ReservationFind;