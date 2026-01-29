import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaLock } from "react-icons/fa";
import { toast } from 'react-toastify';
import api from '../../services/api';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await api.post('/auth', {
                email: username,
                password: password
            });

            // O backend retorna um objeto JwtToken com o campo 'token'
            const token = response.data.token;
            if (token) {
                localStorage.setItem('token', token);
                toast.success("Login realizado com sucesso!");
                navigate('/home');
            }
        } catch (error) {
            console.error("Erro ao fazer login:", error);
            const errorMsg = error.response?.data?.message || "E-mail ou senha inválidos.";
            toast.error(errorMsg);
        }
    };

    return (
        <div className="login-container">
            <div className='login-card'>
                <form onSubmit={handleSubmit}>
                    <h1>Reserva IFPB</h1>
                    <p className="subtitle">Entre com suas credenciais acadêmicas</p>
                    <div className='input-field'>
                        <FaUser className='icon' />
                        <input
                            type="email"
                            placeholder='E-mail Institucional'
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className='input-field'>
                        <FaLock className='icon' />
                        <input
                            type="password"
                            placeholder='Senha'
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="login-button">Entrar</button>
                    <div className="signup-text">
                        <p>Não tem uma conta? <Link to="/register">Cadastre-se</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;