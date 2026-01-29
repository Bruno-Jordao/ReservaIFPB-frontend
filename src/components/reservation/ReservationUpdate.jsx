import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./Reservation.css";

const ReservationUpdate = ({ reservation, goBack }) => {

    const [roomId, setRoomId] = useState(reservation?.roomId || "");
    const [startTime, setStartTime] = useState(reservation?.startTime || "");
    const [endTime, setEndTime] = useState(reservation?.endTime || "");
    const [activity, setActivity] = useState(reservation?.activity || "");
    const [description, setDescription] = useState(reservation?.description || "");
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        const fetchRooms = async () => {
            const token = localStorage.getItem("token");
            const res = await axios.get("http://localhost:8080/api/v1/rooms", {
                headers: { Authorization: `Bearer ${token}` }
            });
            setRooms(res.data);
        };
        fetchRooms();
    }, []);

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem("token");
            await axios.put(`http://localhost:8080/api/v1/reservations/${reservation.id}`, {
                roomId,
                startTime,
                endTime,
                activity,
                description
            }, {
                headers: { Authorization: `Bearer ${token}` }
            });

            toast.success("Reserva atualizada com sucesso!");
            goBack();
        } catch (error) {
            toast.error("Erro ao atualizar reserva. Verifique os dados.");
        }
    };

    return (
        <div className="reservation-page">
            <div className="container-reservation">
                <form onSubmit={handleUpdate}>
                    <h1>Editar Reserva</h1>
                    <select value={roomId} onChange={e => setRoomId(e.target.value)} required>
                        <option value="">Selecione a Sala</option>
                        {rooms.map(room => (
                            <option key={room.id} value={room.id}>{room.name}</option>
                        ))}
                    </select>

                    <input type="datetime-local" value={startTime} onChange={e => setStartTime(e.target.value)} required />
                    <input type="datetime-local" value={endTime} onChange={e => setEndTime(e.target.value)} required />
                    <input placeholder="Atividade" value={activity} onChange={e => setActivity(e.target.value)} required />
                    <textarea placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value)} />

                    <button type="submit">Atualizar</button>
                    <button type="button" onClick={goBack}>Voltar</button>
                </form>
            </div>
        </div>
    );
};

export default ReservationUpdate;