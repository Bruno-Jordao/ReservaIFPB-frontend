import { useState } from "react";
import axios from "axios";
import "./Reservation.css";

const ReservationDelete = ({ goBack }) => {
    const [id, setId] = useState("");

    const handleDelete = async () => {
        if (!window.confirm("Are you sure you want to cancel this reservation?")) return;
        try {
            await axios.delete(`http://localhost:8080/api/v1/reservations/${id}`);
            alert("Reservation cancelled successfully!");
            setId("");
        } catch { alert("Error cancelling reservation. It may have already started."); }
    };

    return (
        <div className="reservation-page">
            <div className="container-reservation">
                <h1>Cancel Reservation</h1>
                <input placeholder="Reservation ID" value={id} onChange={e => setId(e.target.value)} />
                <button className="danger" onClick={handleDelete}>Cancel Reservation</button>
                <button onClick={goBack}>Back</button>
            </div>
        </div>
    );
};

export default ReservationDelete;