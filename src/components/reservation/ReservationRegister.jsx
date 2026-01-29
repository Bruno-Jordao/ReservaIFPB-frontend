import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCalendarPlus, FaDoorOpen, FaClock, FaAlignLeft } from "react-icons/fa";
import { toast } from 'react-toastify';
import api from '../../services/api';
import './Reservation.css';

const ReservationRegister = () => {
    const [rooms, setRooms] = useState([]);
    const [formData, setFormData] = useState({
        roomId: '',
        date: '',
        startTime: '',
        endTime: '',
        reason: '',
        description: ''
    });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const response = await api.get('/room');
                setRooms(response.data);
            } catch (error) {
                toast.error("Erro ao carregar salas disponíveis.");
            }
        };
        fetchRooms();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Recuperar o ID do utilizador logado (assumindo que guardou no login)
        const user = JSON.parse(localStorage.getItem("user"));

        const payload = {
            teacherId: user.id, // Adicionado para satisfazer o DTO
            roomId: Number(formData.roomId),
            startTime: `${formData.date}T${formData.startTime}:00`, // Formata para LocalDateTime
            endTime: `${formData.date}T${formData.endTime}:00`,
            description: formData.description,
            activity: formData.reason // Renomeado de reason para activity
        };

        try {
            await api.post('/reservations', payload); // Rota corrigida para plural
            toast.success("Reserva realizada com sucesso!");
            navigate('/reservations');
        } catch (error) {
            const msg = error.response?.data?.message || "Erro ao realizar reserva.";
            toast.error(msg);
        }
    };

    return (
        <div className="reservation-container">
            <div className="reservation-card">
                <form onSubmit={handleSubmit}>
                    <h1>Nova Reserva</h1>
                    <p className="subtitle">Agende uma instalação para a sua atividade</p>

                    <div className="input-field">
                        <FaDoorOpen className="icon" />
                        <select
                            required
                            value={formData.roomId}
                            onChange={(e) => setFormData({...formData, roomId: e.target.value})}
                        >
                            <option value="">Selecione a Sala</option>
                            {rooms.map(room => (
                                <option key={room.id} value={room.id}>{room.name}</option>
                            ))}
                        </select>
                    </div>

                    <div className="input-field">
                        <FaCalendarPlus className="icon" />
                        <input
                            type="date"
                            required
                            value={formData.date}
                            onChange={(e) => setFormData({...formData, date: e.target.value})}
                        />
                    </div>

                    <div className="time-group">
                        <div className="input-field">
                            <FaClock className="icon" />
                            <input
                                type="time"
                                required
                                value={formData.startTime}
                                onChange={(e) => setFormData({...formData, startTime: e.target.value})}
                            />
                        </div>
                        <div className="input-field">
                            <FaClock className="icon" />
                            <input
                                type="time"
                                required
                                value={formData.endTime}
                                onChange={(e) => setFormData({...formData, endTime: e.target.value})}
                            />
                        </div>
                    </div>

                    <div className="input-field">
                        <FaAlignLeft className="icon" />
                        <input
                            type="text"
                            placeholder="Motivo (ex: Aula, Prova)"
                            required
                            value={formData.reason}
                            onChange={(e) => setFormData({...formData, reason: e.target.value})}
                        />
                    </div>

                    <div className="input-field">
                        <textarea
                            placeholder="Descrição adicional"
                            value={formData.description}
                            onChange={(e) => setFormData({...formData, description: e.target.value})}
                        ></textarea>
                    </div>

                    <div className="button-group">
                        <button type="submit" className="save-button">Confirmar Reserva</button>
                        <button type="button" className="cancel-button" onClick={() => navigate('/home')}>Voltar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ReservationRegister;