import { useEffect, useState } from "react";
import axios from "axios";
import "./Reservation.css";

const ReservationList = ({ goBack }) => {
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        const fetchReservations = async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/v1/reservations");
                setReservations(response.data);
            } catch (error) {
                console.error("Error fetching reservations:", error);
            }
        };
        fetchReservations();
    }, []);

    return (
        <div className="container">
            <h1>Reservation List</h1>
            <div className="list-content" style={{ width: '100%', color: 'white' }}>
                {reservations.length > 0 ? (
                    <table style={{ width: '100%', marginBottom: '20px' }}>
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Activity</th>
                            <th>Start Time</th>
                        </tr>
                        </thead>
                        <tbody>
                        {reservations.map((res) => (
                            <tr key={res.id}>
                                <td>{res.id}</td>
                                <td>{res.activity}</td>
                                <td>{new Date(res.startTime).toLocaleString()}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                ) : <p>No reservations found.</p>}
            </div>
            <button className="secondary-button" onClick={goBack}>Back</button>
        </div>
    );
};

export default ReservationList;