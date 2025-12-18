import { useState } from "react";
import axios from "axios";
import "./Reservation.css";

const ReservationDelete = ({ goBack }) => {
    const [id, setId] = useState("");

    const handleDelete = async (e) => {
        e.preventDefault();

        if (!id) {
            alert("Please enter a reservation ID.");
            return;
        }

        if (!window.confirm(`Are you sure you want to delete reservation ID: ${id}?`)) return;

        try {
            await axios.delete(`http://localhost:8080/api/v1/reservations/${id}`);
            alert("Reservation deleted successfully!");
            setId("");
        } catch (error) {
            console.error(error);
            const msg = error.response?.data?.message || "Error deleting reservation. Check if the ID exists.";
            alert(msg);
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleDelete}>
                <h1>Delete Reservation</h1>

                <div className="input-field">
                    <input
                        type="number"
                        placeholder="Reservation ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" style={{ backgroundColor: '#d32f2f', color: 'white' }}>
                    Delete Permanently
                </button>

                <button type="button" className="secondary-button" onClick={goBack}>
                    Back
                </button>
            </form>
        </div>
    );
};

export default ReservationDelete;