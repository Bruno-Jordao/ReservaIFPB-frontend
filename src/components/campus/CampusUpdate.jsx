import { useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api"; // Usando sua instância configurada
import "./Campus.css";

const CampusUpdate = ({ campus, goBack }) => {
    // Inicializa com 'uf' em vez de 'city' para alinhar com o Backend
    const [name, setName] = useState(campus?.name || "");
    const [uf, setUf] = useState(campus?.uf || "");

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            // Rota corrigida para o singular /campus e campos name/uf
            await api.put(`/campus/${campus.id}`, {
                name: name,
                uf: uf.toUpperCase()
            });

            toast.success("Campus atualizado com sucesso!");
            goBack(); // Retorna para a listagem
        } catch (error) {
            console.error("Erro ao atualizar campus:", error);
            const errorMessage = error.response?.data?.message || "Erro ao atualizar campus.";
            toast.error(errorMessage);
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleUpdate} className="campus-form">
                <h2>Editar Unidade</h2>

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
                    <button type="submit" className="save-btn">Salvar Alterações</button>
                    <button type="button" className="cancel-btn" onClick={goBack}>Cancelar</button>
                </div>
            </form>
        </div>
    );
};

export default CampusUpdate;