import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FaPlus, FaList, FaArrowLeft } from 'react-icons/fa';
import CampusList from "./CampusList";
import CampusCreate from "./CampusCreate";
import CampusUpdate from "./CampusUpdate";
import './Campus.css';

const CampusPage = () => {
    const [view, setView] = useState("list");
    const [selectedCampus, setSelectedCampus] = useState(null);
    const navigate = useNavigate();

    return (
        <div className="hub-container">
            <header className="hub-header">
                <h1>Gestão de Campus</h1>
                <p>Visualize ou cadastre novas unidades do IFPB</p>

                <div className="hub-nav-actions">
                    <button className={`nav-btn ${view === "list" ? "active" : ""}`} onClick={() => setView("list")}>
                        <FaList /> Listar Unidades
                    </button>
                    <button className={`nav-btn ${view === "create" ? "active" : ""}`} onClick={() => setView("create")}>
                        <FaPlus /> Nova Unidade
                    </button>
                    <button className="nav-btn back" onClick={() => navigate('/home')}>
                        <FaArrowLeft /> Voltar ao Hub
                    </button>
                </div>
            </header>

            <main className="hub-content">
                {view === "list" && <CampusList onEdit={(c) => { setSelectedCampus(c); setView("update"); }} />}
                {view === "create" && <CampusCreate goBack={() => setView("list")} />}
                {view === "update" && <CampusUpdate campus={selectedCampus} goBack={() => setView("list")} />}
            </main>
        </div>
    );
};

export default CampusPage;