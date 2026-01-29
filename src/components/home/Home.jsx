import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCity, FaBuilding, FaDoorOpen, FaCalendarAlt, FaSignOutAlt } from 'react-icons/fa';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    const hubs = [
        { title: 'Campus', icon: <FaCity />, path: '/campus', color: '#81c784' },
        { title: 'Blocos', icon: <FaBuilding />, path: '/blocks', color: '#66bb6a' },
        { title: 'Salas', icon: <FaDoorOpen />, path: '/rooms', color: '#4caf50' },
        { title: 'Reservas', icon: <FaCalendarAlt />, path: '/reservations', color: '#43a047' },
    ];

    return (
        <div className="home-hub-container">
            <header className="hub-header">
                <img src="/src/assets/Reserva_IFPB_2.png" alt="Logo IFPB" className="hub-logo" />
                <h1>Painel de Reservas</h1>
                <p>Selecione a categoria que deseja gerenciar</p>
            </header>

            <main className="hub-grid">
                {hubs.map((hub) => (
                    <button
                        key={hub.title}
                        className="hub-button"
                        onClick={() => navigate(hub.path)}
                    >
                        <div className="hub-icon">{hub.icon}</div>
                        <span>{hub.title}</span>
                    </button>
                ))}
            </main>

            <footer className="hub-footer">
                <button className="hub-logout-button" onClick={handleLogout}>
                    <FaSignOutAlt /> Sair do Sistema
                </button>
            </footer>
        </div>
    );
};

export default Home;