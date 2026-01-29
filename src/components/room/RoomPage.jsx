import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FaPlus, FaList, FaArrowLeft } from 'react-icons/fa';
import RoomList from "./RoomList";
import RoomCreate from "./RoomCreate";
import RoomUpdate from "./RoomUpdate";
import './Room.css';

const RoomPage = () => {
    const [view, setView] = useState("list");
    const [selectedRoom, setSelectedRoom] = useState(null);
    const navigate = useNavigate();

    return (
        <div className="hub-container">
            <header className="hub-header">
                <h1>Gestão de Salas</h1>
                <p>Gerencie as salas de aula, laboratórios e auditórios</p>

                <div className="hub-nav-actions">
                    <button className={`nav-btn ${view === "list" ? "active" : ""}`} onClick={() => setView("list")}>
                        <FaList /> Listar Salas
                    </button>
                    <button className={`nav-btn ${view === "create" ? "active" : ""}`} onClick={() => setView("create")}>
                        <FaPlus /> Nova Sala
                    </button>
                    <button className="nav-btn back" onClick={() => navigate('/home')}>
                        <FaArrowLeft /> Voltar ao Hub
                    </button>
                </div>
            </header>

            <main className="hub-content">
                {view === "list" && (
                    <RoomList onEdit={(r) => { setSelectedRoom(r); setView("update"); }} />
                )}
                {view === "create" && <RoomCreate goBack={() => setView("list")} />}
                {view === "update" && <RoomUpdate room={selectedRoom} goBack={() => setView("list")} />}
            </main>
        </div>
    );
};

export default RoomPage;