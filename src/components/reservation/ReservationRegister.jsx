import { useState } from "react";
import axios from "axios";

import "../login/Login.css";

const ReservationRegister = () => {

    const [teacherId, setTeacherId] = useState(1);
    const [roomId, setRoomId] = useState(1);

    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [description, setDescription] = useState("");
    const [activity, setActivity] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        const reservationData = {
            teacherId: teacherId,
            roomId: roomId,
            startTime: startTime,
            endTime: endTime,
            description: description,
            activity: activity
        };

        try {

            const response = await axios.post("http://localhost:8080/api/v1/reservations", reservationData);

            console.log(response.data);
            alert("Reservation registered successfully! ID: " + response.data.id);


            setStartTime("");
            setEndTime("");
            setDescription("");
            setActivity("");

        } catch (error) {
            console.error(error);

            let errorMessage = "Registration failed! Invalid data or conflict.";

            if (error.response && error.response.data) {

                errorMessage = error.response.data.message || error.response.data.errors;
            }

            alert(errorMessage);
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Register New Reservation</h1>


                <div className="input-field">
                    <input
                        type="number"
                        placeholder='ID of the logged-in Teacher'
                        value={teacherId}
                        onChange={(e) => setTeacherId(Number(e.target.value))}
                        required
                    />
                </div>


                <div className="input-field">
                    <input
                        type="number"
                        placeholder='ID of the Room to Reserve'
                        value={roomId}
                        onChange={(e) => setRoomId(Number(e.target.value))}
                        required
                    />
                </div>


                <div className="input-field">
                    <input
                        type="datetime-local"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                        required
                    />
                </div>


                <div className="input-field">
                    <input
                        type="datetime-local"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                        required
                    />
                </div>


                <div className="input-field">
                    <input
                        type="text"
                        placeholder='Activity Type (e.g., Aula, Evento)'
                        value={activity}
                        onChange={(e) => setActivity(e.target.value)}
                        required
                    />
                </div>


                <div className="input-field">
                    <input
                        type="text"
                        placeholder='Detailed Description/Motive'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>

                <button>Register Reservation</button>

                <div className="signup-link">
                    <p>
                        <a href="#">Back to Reservations List</a>
                    </p>
                </div>
            </form>
        </div>
    );
}

export default ReservationRegister;