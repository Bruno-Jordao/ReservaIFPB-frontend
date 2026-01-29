import { useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import "./Campus.css";

const CampusCreate = ({ goBack }) => {
    const [name, setName] = useState("");
    const [uf, setUf] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Envia para o endpoint singular e campos 'name'/'uf' esperados pelo CampusCreateDto
            await api.post("/campus", {
                name: name,
                uf: uf
            });

            toast.success("Campus cadastrado com sucesso!");
            goBack(); // Retorna para a listagem
        } catch (error) {
            console.error("Erro ao criar campus:", error);
            const errorMessage = error.response?.data?.message || "Erro ao cadastrar campus.";
            toast.error(errorMessage);
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="campus-form">
                <h2>Cadastrar Nova Unidade</h2>

                <div className="input-group">
                    <label>Nome do Campus</label>
                    <input
                        type="text"
                        placeholder="Ex: Campus Monteiro"
                        required
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <label>UF (Estado)</label>
                    <input
                        type="text"
                        placeholder="Ex: PB"
                        required
                        maxLength="2"
                        value={uf}
                        onChange={e => setUf(e.target.value.toUpperCase())}
                    />
                </div>

                <div className="form-buttons">
                    <button type="submit" className="save-btn">Salvar Unidade</button>
                    <button type="button" className="cancel-btn" onClick={goBack}>Cancelar</button>
                </div>
            </form>
        </div>
    );
};

export default CampusCreate;