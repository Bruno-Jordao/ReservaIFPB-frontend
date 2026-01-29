import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { FaEdit, FaTrash, FaDoorOpen } from 'react-icons/fa';
import api from "../../services/api";
import "./Room.css";

const RoomList = ({ onEdit }) => {
    const [rooms, setRooms] = useState([]);

    const fetchRooms = async () => {
        try {
            const response = await api.get("/room");
            setRooms(response.data);
        } catch (error) {
            console.error("Erro ao buscar salas:", error);
            toast.error("Erro ao carregar lista de salas.");
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Deseja realmente excluir esta sala?")) {
            try {
                await api.delete(`/room/${id}`);
                toast.success("Sala removida com sucesso!");
                fetchRooms();
            } catch (error) {
                toast.error("Erro ao excluir. Verifique suas permissões.");
            }
        }
    };

    useEffect(() => {
        fetchRooms();
    }, []);

    return (
        <div className="room-list-container">
            <div className="room-grid">
                {rooms.length > 0 ? (
                    rooms.map((room) => (
                        <div key={room.id} className="room-card">
                            <div className="room-info">
                                <FaDoorOpen style={{ fontSize: '1.5rem', marginRight: '15px', color: '#4caf50' }} />
                                <div>
                                    <strong>{room.name}</strong>
                                    <span>Capacidade: {room.capacity} | Bloco: {room.blockName}</span>
                                </div>
                            </div>
                            <div className="actions">
                                <button onClick={() => onEdit(room)} className="edit-btn" title="Editar">
                                    <FaEdit />
                                </button>
                                <button onClick={() => handleDelete(room.id)} className="delete-btn" title="Excluir">
                                    <FaTrash />
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="empty-msg">Nenhuma sala cadastrada no momento.</p>
                )}
            </div>
        </div>
    );
};

export default RoomList;