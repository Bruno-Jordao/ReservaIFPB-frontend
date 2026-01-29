import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaCity, FaBuilding, FaDoorOpen, FaCalendarAlt, FaSignOutAlt } from 'react-icons/fa';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    return (
        <div className="home-container">
            {/* Barra Lateral / Menu */}
            <aside className="sidebar">
                <div className="sidebar-header">
                    <h2>Reserva IFPB</h2>
                </div>
                <nav className="sidebar-nav">
                    <Link to="/campus" className="nav-item">
                        <FaCity className="icon" /> <span>Campus</span>
                    </Link>
                    <Link to="/blocks" className="nav-item">
                        <FaBuilding className="icon" /> <span>Blocos</span>
                    </Link>
                    <Link to="/rooms" className="nav-item">
                        <FaDoorOpen className="icon" /> <span>Salas</span>
                    </Link>
                    <Link to="/reservations" className="nav-item">
                        <FaCalendarAlt className="icon" /> <span>Reservas</span>
                    </Link>
                </nav>
                <button className="logout-button" onClick={handleLogout}>
                    <FaSignOutAlt className="icon" /> Sair
                </button>
            </aside>

            {/* Conteúdo Principal */}
            <main className="main-content">
                <header className="content-header">
                    <h1>Bem-vindo ao Sistema de Reservas</h1>
                    <p>Selecione uma opção no menu ao lado para começar.</p>
                </header>

                <div className="dashboard-grid">
                    <div className="stat-card">
                        <h3>Gestão de Espaços</h3>
                        <p>Gerencie campus, blocos e salas de forma centralizada.</p>
                    </div>
                    <div className="stat-card">
                        <h3>Reservas Ativas</h3>
                        <p>Visualize e controle todas as reservas do sistema.</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;