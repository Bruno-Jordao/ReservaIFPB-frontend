import { useEffect, useState } from "react";
import axios from "axios";
import "./Reservation.css";

const ReservationList = ({ goBack }) => {
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/v1/reservations")
            .then(res => setReservations(res.data))
            .catch(() => alert("Error loading reservations"));
    }, []);

    return (
        <div className="reservation-page">
            <div className="container-reservation">
                <h1>Registered Reservations</h1>
                <ul className="reservation-list">
                    {reservations.map(r => (
                        <li key={r.id} className="reservation-item">
                            <strong>ID:</strong> {r.id}<br />
                            <strong>Room:</strong> {r.room?.name}<br />
                            <strong>Teacher:</strong> {r.teacher?.name}<br />
                            <strong>Start:</strong> {new Date(r.startTime).toLocaleString()}
                        </li>
                    ))}
                </ul>
                <button onClick={goBack}>Back</button>
            </div>
        </div>
    );
};

export default ReservationList;