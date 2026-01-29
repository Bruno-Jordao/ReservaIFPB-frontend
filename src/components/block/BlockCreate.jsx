import { useState, useEffect } from "react";
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
                const response = await api.get("/campuses");
                setCampuses(response.data);
            } catch {
                toast.error("Erro ao carregar campi para seleção.");
            }
        };
        fetchCampuses();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post("/blocks", {
                name,
                campusId: Number(campusId)
            });
            toast.success("Bloco criado com sucesso!");
            goBack();
        } catch (error) {
            toast.error("Erro ao criar bloco. Verifique se o nome já existe.");
        }
    };

    return (
        <div className="block-form-container">
            <form onSubmit={handleSubmit}>
                <h1>Novo Bloco</h1>
                <input
                    placeholder="Nome do Bloco (ex: Bloco A)"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
                <select
                    value={campusId}
                    onChange={e => setCampusId(e.target.value)}
                    required
                >
                    <option value="">Selecione o Campus</option>
                    {campuses.map(c => (
                        <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                </select>
                <div className="button-group">
                    <button type="submit" className="save-button">Guardar</button>
                    <button type="button" onClick={goBack} className="cancel-button">Cancelar</button>
                </div>
            </form>
        </div>
    );
};

export default BlockCreate;