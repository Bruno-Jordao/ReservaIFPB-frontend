import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { FaEdit, FaTrash, FaMapMarkerAlt } from 'react-icons/fa';
import api from "../../services/api";
import "./Campus.css";

const CampusList = ({ onEdit }) => {
    const [campuses, setCampuses] = useState([]);

    const fetchCampuses = async () => {
        try {
            // URL corrigida para o singular conforme mapeado no CampusController do backend
            const response = await api.get("/campus");
            setCampuses(response.data);
        } catch (error) {
            console.error("Erro ao buscar campi:", error);
            toast.error("Erro ao carregar lista de campi.");
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Deseja realmente excluir este campus?")) {
            try {
                await api.delete(`/campus/${id}`);
                toast.success("Campus removido com sucesso!");
                fetchCampuses();
            } catch (error) {
                toast.error("Erro ao excluir. Verifique se você possui perfil de ADMIN.");
            }
        }
    };

    useEffect(() => {
        fetchCampuses();
    }, []);

    return (
        <div className="campus-list-container">
            <div className="campus-grid">
                {campuses.length > 0 ? (
                    campuses.map((campus) => (
                        <div key={campus.id} className="campus-card">
                            <div className="info">
                                <FaMapMarkerAlt className="marker-icon" />
                                <div>
                                    <strong>{campus.name}</strong>
                                    {/* Campo 'uf' mapeado conforme o DTO do backend */}
                                    <span className="uf-badge">{campus.uf}</span>
                                </div>
                            </div>
                            <div className="actions">
                                <button onClick={() => onEdit(campus)} className="edit-btn" title="Editar">
                                    <FaEdit />
                                </button>
                                <button onClick={() => handleDelete(campus.id)} className="delete-btn" title="Excluir">
                                    <FaTrash />
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="empty-msg">Nenhum campus cadastrado no momento.</p>
                )}
            </div>
        </div>
    );
};

export default CampusList;