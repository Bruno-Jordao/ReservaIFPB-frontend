import { useState } from "react";
import axios from "axios";
import "./Reservation.css";

const ReservationUpdate = ({ goBack }) => {
    const [id, setId] = useState("");
    const [roomId, setRoomId] = useState("");
    const [teacherId, setTeacherId] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [activity, setActivity] = useState("");
    const [description, setDescription] = useState("");

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8080/api/v1/reservations/${id}`, {
                roomId,
                teacherId,
                startTime,
                endTime,
                activity,
                description
            });

            alert("Reserva atualizada com sucesso!");
        } catch (error) {
            console.error(error);
            alert("Erro ao atualizar reserva. Verifique os dados e se o horário já passou.");
        }
    };

    return (
        <div className="reservation-page">
            <div className="container-reservation">
                <form onSubmit={handleUpdate}>
                    <h1>Editar Reserva</h1>
                    <input placeholder="ID da Reserva para editar" value={id} onChange={e => setId(e.target.value)} required />
                    <input placeholder="ID da Sala" value={roomId} onChange={e => setRoomId(e.target.value)} required />
                    <input placeholder="ID do Professor" value={teacherId} onChange={e => setTeacherId(e.target.value)} required />
                    <input type="datetime-local" value={startTime} onChange={e => setStartTime(e.target.value)} required />
                    <input type="datetime-local" value={endTime} onChange={e => setEndTime(e.target.value)} required />
                    <input placeholder="Atividade (ex: Aula)" value={activity} onChange={e => setActivity(e.target.value)} required />
                    <textarea placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value)} />

                    <button type="submit">Atualizar</button>
                    <button type="button" onClick={goBack}>Voltar</button>
                </form>
            </div>
        </div>
    );
};

export default ReservationUpdate;