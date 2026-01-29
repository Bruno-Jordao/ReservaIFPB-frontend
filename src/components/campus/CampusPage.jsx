import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { FaCity, FaBuilding, FaDoorOpen, FaCalendarAlt, FaSignOutAlt, FaPlus, FaList, FaHome } from 'react-icons/fa';
import CampusList from "./CampusList";
import CampusCreate from "./CampusCreate";
import CampusUpdate from "./CampusUpdate";
import "./Campus.css";

const CampusPage = () => {
    const [view, setView] = useState("list");
    const [selectedCampus, setSelectedCampus] = useState(null);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    const handleEdit = (campus) => {
        setSelectedCampus(campus);
        setView("update");
    };

    const handleBack = () => {
        setSelectedCampus(null);
        setView("list");
    };

    return (
        <div className="home-container">
            {/* Sidebar consistente com a Home */}
            <aside className="sidebar">
                <div className="sidebar-header">
                    <h2>Reserva IFPB</h2>
                </div>
                <nav className="sidebar-nav">
                    <Link to="/home" className="nav-item">
                        <FaHome className="icon" /> <span>Início</span>
                    </Link>
                    <Link to="/campus" className="nav-item active">
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

            <main className="main-content">
                <header className="content-header">
                    <div className="header-title">
                        <h1>Gestão de Campus</h1>
                        <p>Gerencie as unidades institucionais cadastradas.</p>
                    </div>
                    <div className="header-actions">
                        <button
                            className={`action-btn ${view === 'list' ? 'active' : ''}`}
                            onClick={() => setView("list")}
                        >
                            <FaList /> Listar
                        </button>
                        <button
                            className={`action-btn ${view === 'create' ? 'active' : ''}`}
                            onClick={() => setView("create")}
                        >
                            <FaPlus /> Novo Campus
                        </button>
                    </div>
                </header>

                <div className="campus-content-area">
                    {view === "list" && <CampusList onEdit={handleEdit} />}
                    {view === "create" && <CampusCreate goBack={handleBack} />}
                    {view === "update" && (
                        <CampusUpdate campus={selectedCampus} goBack={handleBack} />
                    )}
                </div>
            </main>
        </div>
    );
};

export default CampusPage;