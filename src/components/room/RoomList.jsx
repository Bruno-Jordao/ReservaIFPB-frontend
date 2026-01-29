import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { FaEdit, FaTrash } from 'react-icons/fa';
import api from "../../services/api"; //
import "./Room.css";

const RoomList = ({ onEdit }) => { // Recebe onEdit do RoomPage
    const [rooms, setRooms] = useState([]);

    const fetchRooms = async () => {
        try {
            const response = await api.get("/rooms"); // Usa base centralizada
            setRooms(response.data);
        } catch (error) {
            toast.error("Erro ao carregar salas.");
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Deseja realmente eliminar esta sala?")) {
            try {
                await api.delete(`/rooms/${id}`);
                toast.success("Sala eliminada com sucesso!");
                fetchRooms();
            } catch (error) {
                toast.error("Erro ao eliminar sala.");
            }
        }
    };

    useEffect(() => {
        fetchRooms();
    }, []);

    return (
        <div className="room-list">
            <h2>Salas Disponíveis</h2>
            <div className="room-grid">
                {rooms.map((room) => (
                    <div key={room.id} className="room-item-card">
                        <span><strong>{room.name}</strong> - Bloco: {room.blockName}</span>
                        <div className="actions">
                            <button className="edit-btn" onClick={() => onEdit(room)}>
                                <FaEdit />
                            </button>
                            <button className="delete-btn" onClick={() => handleDelete(room.id)}>
                                <FaTrash />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RoomList;