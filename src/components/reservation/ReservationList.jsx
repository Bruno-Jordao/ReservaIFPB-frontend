import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { FaEdit, FaTrash, FaCalendarCheck } from 'react-icons/fa';
import api from "../../services/api";
import "./Reservation.css";

const ReservationList = ({ onEdit }) => {
    const [reservations, setReservations] = useState([]);

    const fetchReservations = async () => {
        try {
            const response = await api.get("/reservations");
            setReservations(response.data);
        } catch (error) {
            console.error("Erro ao buscar reservas:", error);
            toast.error("Erro ao carregar lista de reservas.");
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Deseja cancelar esta reserva?")) {
            try {
                await api.delete(`/reservation/${id}`);
                toast.success("Reserva cancelada com sucesso!");
                fetchReservations();
            } catch (error) {
                toast.error("Erro ao cancelar reserva.");
            }
        }
    };

    useEffect(() => {
        fetchReservations();
    }, []);

    return (
        <div className="reservation-list-container">
            <div className="reservation-grid">
                {reservations.length > 0 ? (
                    reservations.map((res) => (
                        <div key={res.id} className="reservation-card">
                            <div className="res-info">
                                <FaCalendarCheck style={{ fontSize: '1.5rem', marginRight: '15px', color: '#43a047' }} />
                                <div>
                                    <strong>{res.room.name}</strong> // Em vez de res.roomName
                                    <div className="res-details">
                                        <span>Data: {new Date(res.startTime).toLocaleDateString()}</span>
                                        <span>Início: {new Date(res.startTime).toLocaleTimeString()}</span>
                                        <span>Fim: {new Date(res.endTime).toLocaleTimeString()}</span>
                                    </div>
                                    <span className="res-status">Reservado por: {res.teacher.username}</span> // Em vez de res.userName
                                </div>
                            </div>
                            <div className="actions">
                                <button onClick={() => onEdit(res)} className="edit-btn" title="Editar">
                                    <FaEdit />
                                </button>
                                <button onClick={() => handleDelete(res.id)} className="delete-btn" title="Cancelar">
                                    <FaTrash />
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="empty-msg">Nenhuma reserva encontrada.</p>
                )}
            </div>
        </div>
    );
};

export default ReservationList;