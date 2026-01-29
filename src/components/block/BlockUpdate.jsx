import { useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import "./Block.css";

const BlockUpdate = ({ block, goBack }) => {
    const [name, setName] = useState(block?.name || "");
    const [campusId, setCampusId] = useState(block?.campusId || "");

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await api.put(`/blocks/${block.id}`, {
                name: name,
                campusId: Number(campusId)
            });
            toast.success("Bloco atualizado com sucesso!");
            goBack();
        } catch (error) {
            toast.error("Erro ao atualizar bloco.");
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleUpdate} className="campus-form">
                <h2>Editar Bloco: {block?.name}</h2>
                <div className="input-group">
                    <label>Nome do Bloco</label>
                    <input value={name} onChange={e => setName(e.target.value)} required />
                </div>
                <div className="input-group">
                    <label>ID do Campus</label>
                    <input type="number" value={campusId} onChange={e => setCampusId(e.target.value)} required />
                </div>
                <div className="form-buttons">
                    <button type="submit" className="save-btn">Salvar Alterações</button>
                    <button type="button" className="cancel-btn" onClick={goBack}>Cancelar</button>
                </div>
            </form>
        </div>
    );
};

export default BlockUpdate;