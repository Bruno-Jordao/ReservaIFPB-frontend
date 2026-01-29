import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import "./Block.css";

const BlockCreate = ({ goBack }) => {
    const [name, setName] = useState("");
    const [campusId, setCampusId] = useState("");
    const [campuses, setCampuses] = useState([]);

    useEffect(() => {
        const fetchCampuses = async () => {
            try {
                // CORREÇÃO: Endpoint singular de acordo com o CampusController.java
                const response = await api.get("/campus");
                setCampuses(Array.isArray(response.data) ? response.data : []);
            } catch (error) {
                toast.error("Erro ao carregar a lista de campus.");
            }
        };
        fetchCampuses();
    }, []);

    const handleSave = async (e) => {
        e.preventDefault();
        if (!campusId) {
            toast.warning("Por favor, selecione um campus.");
            return;
        }
        try {
            await api.post("/block", {
                name,
                campusId: Number(campusId)
            });
            toast.success("Bloco criado com sucesso!");
            goBack();
        } catch (error) {
            toast.error("Erro ao criar bloco.");
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSave} className="campus-form">
                <h2>Cadastrar Novo Bloco</h2>
                <div className="input-group">
                    <label>Nome do Bloco</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder="Ex: Bloco A"
                    />
                </div>
                <div className="input-group">
                    <label>Campus Responsável</label>
                    <select
                        value={campusId}
                        onChange={(e) => setCampusId(e.target.value)}
                        required
                    >
                        <option value="">Selecione um campus...</option>
                        {campuses.map((c) => (
                            <option key={c.id} value={c.id}>{c.name}</option>
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

export default BlockCreate;