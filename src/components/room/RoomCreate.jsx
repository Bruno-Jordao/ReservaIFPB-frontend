import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import api from "../../services/api"; //
import "./Room.css";

const RoomCreate = ({ goBack }) => {
    const [formData, setFormData] = useState({
        name: "",
        capacity: "",
        blockId: "",
        floor: ""
    });
    const [blocks, setBlocks] = useState([]);

    useEffect(() => {
        const fetchBlocks = async () => {
            try {
                const response = await api.get("/blocks");
                setBlocks(response.data);
            } catch {
                toast.error("Erro ao carregar blocos.");
            }
        };
        fetchBlocks();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post("/rooms", {
                ...formData,
                capacity: Number(formData.capacity),
                blockId: Number(formData.blockId)
            });
            toast.success("Sala criada com sucesso!");
            goBack();
        } catch (error) {
            toast.error("Erro ao criar sala.");
        }
    };

    return (
        <div className="room-page">
            <div className="container-room">
                <form onSubmit={handleSubmit}>
                    <h1>Registar Sala</h1>
                    <input
                        placeholder="Nome da Sala"
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                        required
                    />
                    <input
                        placeholder="Capacidade"
                        type="number"
                        value={formData.capacity}
                        onChange={e => setFormData({...formData, capacity: e.target.value})}
                        required
                    />
                    <select
                        value={formData.blockId}
                        onChange={e => setFormData({...formData, blockId: e.target.value})}
                        required
                    >
                        <option value="">Selecione o Bloco</option>
                        {blocks.map(block => (
                            <option key={block.id} value={block.id}>{block.name}</option>
                        ))}
                    </select>
                    <input
                        placeholder="Andar"
                        value={formData.floor}
                        onChange={e => setFormData({...formData, floor: e.target.value})}
                    />
                    <div className="button-group">
                        <button type="submit" className="save-button">Criar</button>
                        <button type="button" className="cancel-button" onClick={goBack}>Voltar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RoomCreate;