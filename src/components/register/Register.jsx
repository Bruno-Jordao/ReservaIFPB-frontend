import { useState } from "react";
import axios from "axios";
import "./Register.css";

const Register = ({ goBack }) => {
    // Estados mapeados exatamente como no UserCreateDto do Java
    const [name, setName] = useState("");
    const [registration, setRegistration] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        // O objeto deve ter as chaves: name, registration, email, password
        const userData = {
            name: name,
            registration: registration,
            email: email,
            password: password
        };

        try {
            await axios.post("http://localhost:8080/api/v1/users", userData);
            alert("Usuário cadastrado com sucesso!");
            if (goBack) goBack();
        } catch (error) {
            console.error(error);
            // Captura mensagens específicas de erro de validação do back-end
            let errorMessage = "Cadastro falhou! Verifique os dados.";
            if (error.response && error.response.data) {
                errorMessage = error.response.data.message || "Campos inválidos.";
            }
            alert(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Cadastro de Usuário</h1>

                <div className="input-field">
                    <label>Nome Completo</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="input-field">
                    <label>Matrícula / Registro</label>
                    <input
                        type="text"
                        value={registration}
                        onChange={(e) => setRegistration(e.target.value)}
                        required
                    />
                </div>

                <div className="input-field">
                    <label>E-mail Institucional</label>
                    <input
                        type="email"
                        placeholder="exemplo@ifpb.edu.br"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="input-field">
                    <label>Senha</label>
                    <input
                        type="password"
                        placeholder="Mínimo 8 caracteres"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        minLength="8"
                    />
                </div>

                <button disabled={loading} type="submit">
                    {loading ? "Cadastrando..." : "Registrar Usuário"}
                </button>

                <button type="button" className="secondary-button" onClick={goBack}>
                    Voltar
                </button>
            </form>
        </div>
    );
};

export default Register;