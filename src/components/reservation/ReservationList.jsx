import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlus, FaEdit, FaTrash, FaCalendarAlt, FaClock, FaDoorOpen } from 'react-icons/fa';
import { toast } from 'react-toastify';
import api from '../../services/api';
import './Reservation.css';

const ReservationList = () => {
    const [reservations, setReservations] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const fetchReservations = async () => {
        try {
            const response = await api.get('/reservations');
            setReservations(response.data);
        } catch (error) {
            toast.error("Erro ao carregar lista de reservas.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchReservations();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm("Tem certeza que deseja cancelar esta reserva?")) {
            try {
                await api.delete(`/reservations/${id}`);
                toast.success("Reserva cancelada com sucesso!");
                fetchReservations(); // Atualiza a lista após apagar
            } catch (error) {
                toast.error("Erro ao cancelar reserva.");
            }
        }
    };

    if (loading) return <div className="loading">Carregando reservas...</div>;

    return (
        <div className="reservation-container">
            <div className="list-header">
                <h1>Minhas Reservas</h1>
                <button className="add-button" onClick={() => navigate('/reservations/new')}>
                    <FaPlus /> Nova Reserva
                </button>
            </div>

            <div className="reservation-grid">
                {reservations.length === 0 ? (
                    <p className="empty-msg">Nenhuma reserva encontrada.</p>
                ) : (
                    reservations.map(res => (
                        <div key={res.id} className="reservation-item-card">
                            <div className="res-info">
                                <h3>{res.reason}</h3>
                                <p><FaDoorOpen /> Sala: {res.roomName || res.roomId}</p>
                                <p><FaCalendarAlt /> Data: {new Date(res.date).toLocaleDateString()}</p>
                                <p><FaClock /> Horário: {res.startTime} - {res.endTime}</p>
                            </div>
                            <div className="res-actions">
                                <button className="edit-btn" onClick={() => navigate(`/reservations/edit/${res.id}`)}>
                                    <FaEdit />
                                </button>
                                <button className="delete-btn" onClick={() => handleDelete(res.id)}>
                                    <FaTrash />
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
            <button className="back-button" onClick={() => navigate('/home')}>Voltar ao Início</button>
        </div>
    );
};

export default ReservationList;