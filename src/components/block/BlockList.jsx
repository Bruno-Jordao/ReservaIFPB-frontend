import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import "./Block.css";

const BlockList = ({ onEdit }) => {
    const [blocks, setBlocks] = useState([]);

    const fetchBlocks = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.get("http://localhost:8080/api/v1/blocks", {
                headers: { Authorization: `Bearer ${token}` }
            });
            setBlocks(response.data);
        } catch (error) {
            toast.error("Erro ao buscar blocos.");
        }
    };

    const handleDelete = async (id) => {
        try {
            const token = localStorage.getItem("token");
            await axios.delete(`http://localhost:8080/api/v1/blocks/${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            toast.success("Bloco excluído com sucesso!");
            fetchBlocks();
        } catch (error) {
            toast.error("Erro ao excluir bloco.");
        }
    };

    useEffect(() => {
        fetchBlocks();
    }, []);

    return (
        <div className="block-list">
            <h2>Blocos Disponíveis</h2>
            <ul>
                {blocks.map((block) => (
                    <li key={block.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <span><strong>{block.name}</strong> - Campus: {block.campusName}</span>
                        <div>
                            <button onClick={() => onEdit(block)}>Editar</button>
                            <button onClick={() => handleDelete(block.id)} style={{ marginLeft: '10px', color: 'red' }}>Excluir</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlockList;