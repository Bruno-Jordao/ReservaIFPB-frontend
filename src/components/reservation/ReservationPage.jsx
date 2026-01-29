import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FaPlus, FaList, FaArrowLeft } from 'react-icons/fa';
import ReservationList from "./ReservationList";
import ReservationRegister from "./ReservationRegister";
import ReservationUpdate from "./ReservationUpdate";
import './Reservation.css';

const ReservationPage = () => {
    const [view, setView] = useState("list");
    const [selectedReservation, setSelectedReservation] = useState(null);
    const navigate = useNavigate();

    return (
        <div className="hub-container">
            <header className="hub-header">
                <h1>Gestão de Reservas</h1>
                <p>Organize e acompanhe as ocupações dos espaços</p>

                <div className="hub-nav-actions">
                    <button className={`nav-btn ${view === "list" ? "active" : ""}`} onClick={() => setView("list")}>
                        <FaList /> Minhas Reservas
                    </button>
                    <button className={`nav-btn ${view === "create" ? "active" : ""}`} onClick={() => setView("create")}>
                        <FaPlus /> Nova Reserva
                    </button>
                    <button className="nav-btn back" onClick={() => navigate('/home')}>
                        <FaArrowLeft /> Voltar ao Hub
                    </button>
                </div>
            </header>

            <main className="hub-content">
                {view === "list" && (
                    <ReservationList onEdit={(r) => { setSelectedReservation(r); setView("update"); }} />
                )}
                {view === "create" && <ReservationRegister goBack={() => setView("list")} />}
                {view === "update" && <ReservationUpdate reservation={selectedReservation} goBack={() => setView("list")} />}
            </main>
        </div>
    );
};

export default ReservationPage;