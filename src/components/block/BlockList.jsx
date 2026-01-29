import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { FaEdit, FaTrash, FaBuilding } from 'react-icons/fa';
import api from "../../services/api";
import "./Block.css";

const BlockList = ({ onEdit }) => {
    const [blocks, setBlocks] = useState([]);

    const fetchBlocks = async () => {
        try {
            // Rota conforme mapeada no BlockController do backend
            const response = await api.get("/block");
            setBlocks(response.data);
        } catch (error) {
            console.error("Erro ao buscar blocos:", error);
            toast.error("Erro ao carregar lista de blocos.");
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Deseja realmente excluir este bloco?")) {
            try {
                await api.delete(`/block/${id}`);
                toast.success("Bloco removido com sucesso!");
                fetchBlocks();
            } catch (error) {
                toast.error("Erro ao excluir. Apenas administradores podem realizar esta ação.");
            }
        }
    };

    useEffect(() => {
        fetchBlocks();
    }, []);

    return (
        <div className="block-list-container">
            <div className="block-grid">
                {blocks.length > 0 ? (
                    blocks.map((block) => (
                        <div key={block.id} className="block-card">
                            <div className="block-info">
                                <FaBuilding className="icon-green" style={{ fontSize: '1.5rem', marginRight: '15px', color: '#4caf50' }} />
                                <div>
                                    <strong>{block.name}</strong>
                                    <span>Unidade: {block.campusName || "Campus Vinculado"}</span>
                                </div>
                            </div>
                            <div className="actions">
                                <button onClick={() => onEdit(block)} className="edit-btn" title="Editar">
                                    <FaEdit />
                                </button>
                                <button onClick={() => handleDelete(block.id)} className="delete-btn" title="Excluir">
                                    <FaTrash />
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="empty-msg">Nenhum bloco cadastrado no momento.</p>
                )}
            </div>
        </div>
    );
};

export default BlockList;