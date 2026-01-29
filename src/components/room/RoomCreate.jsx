import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import "../campus/Campus.css";

const RoomCreate = ({ goBack }) => {
    const [name, setName] = useState("");
    const [blockId, setBlockId] = useState("");
    const [blocks, setBlocks] = useState([]);

    useEffect(() => {
        const fetchBlocks = async () => {
            try {
                // Sincronizado com BlockController.java (/blocks)
                const response = await api.get("/block");
                setBlocks(response.data);
            } catch (error) {
                toast.error("Erro ao carregar blocos.");
            }
        };
        fetchBlocks();
    }, []);

    const handleSave = async (e) => {
        e.preventDefault();
        try {
            // Sincronizado com RoomController.java (/rooms)
            await api.post("/room", {
                name,
                blockId: Number(blockId)
            });
            toast.success("Sala criada com sucesso!");
            goBack();
        } catch (error) {
            toast.error("Erro ao criar sala.");
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSave} className="campus-form">
                <h2>Cadastrar Nova Sala</h2>
                <div className="input-group">
                    <label>Nome/Número da Sala</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="input-group">
                    <label>Bloco</label>
                    <select value={blockId} onChange={(e) => setBlockId(e.target.value)} required>
                        <option value="">Selecione um bloco...</option>
                        {blocks.map((b) => (
                            <option key={b.id} value={b.id}>{b.name}</option>
                        ))}
                    </select>
                </div>
                <div className="form-buttons">
                    <button type="submit" className="save-btn">Salvar</button>
                    <button type="button" className="cancel-btn" onClick={goBack}>Cancelar</button>
                </div>
            </form>
        </div>
    );
};

export default RoomCreate;