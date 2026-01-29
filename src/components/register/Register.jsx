import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaIdCard, FaEnvelope, FaLock } from "react-icons/fa";
import { toast } from 'react-toastify';
import api from '../../services/api';
import './Register.css';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        enrollment: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            return toast.error("As senhas não coincidem!");
        }

        try {
            // O payload deve seguir o UserCreateDto do backend
            await api.post('/users', {
                name: formData.name,
                registration: formData.enrollment,
                email: formData.email,
                password: formData.password
            });

            toast.success("Conta criada com sucesso! Faça seu login.");
            navigate('/login');
        } catch (error) {
            const msg = error.response?.data?.message || "Erro ao realizar cadastro.";
            toast.error(msg);
        }
    };

    return (
        <div className="register-container">
            <div className="register-card">
                <form onSubmit={handleSubmit}>
                    <h1>Criar Conta</h1>
                    <p className="subtitle">Junte-se ao sistema de reservas do IFPB</p>

                    <div className="input-field">
                        <FaUser className="icon" />
                        <input
                            name="name"
                            type="text"
                            placeholder="Nome Completo"
                            required
                            onChange={handleChange}
                        />
                    </div>

                    <div className="input-field">
                        <FaIdCard className="icon" />
                        <input
                            name="enrollment"
                            type="text"
                            placeholder="Matrícula"
                            required
                            onChange={handleChange}
                        />
                    </div>

                    <div className="input-field">
                        <FaEnvelope className="icon" />
                        <input
                            name="email"
                            type="email"
                            placeholder="E-mail Institucional"
                            required
                            onChange={handleChange}
                        />
                    </div>

                    <div className="input-field">
                        <FaLock className="icon" />
                        <input
                            name="password"
                            type="password"
                            placeholder="Senha"
                            required
                            onChange={handleChange}
                        />
                    </div>

                    <div className="input-field">
                        <FaLock className="icon" />
                        <input
                            name="confirmPassword"
                            type="password"
                            placeholder="Confirmar Senha"
                            required
                            onChange={handleChange}
                        />
                    </div>

                    <button type="submit" className="register-button">Cadastrar</button>

                    <div className="login-link">
                        <p>Já possui uma conta? <Link to="/login">Faça Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;