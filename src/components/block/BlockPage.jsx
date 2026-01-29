import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FaPlus, FaList, FaArrowLeft } from 'react-icons/fa';
import BlockList from "./BlockList";
import BlockCreate from "./BlockCreate";
import BlockUpdate from "./BlockUpdate";
import './Block.css';

const BlockPage = () => {
    const [view, setView] = useState("list");
    const [selectedBlock, setSelectedBlock] = useState(null);
    const navigate = useNavigate();

    return (
        <div className="hub-container">
            <header className="hub-header">
                <h1>Gestão de Blocos</h1>
                <p>Gerencie os blocos físicos de cada unidade do IFPB</p>

                <div className="hub-nav-actions">
                    <button className={`nav-btn ${view === "list" ? "active" : ""}`} onClick={() => setView("list")}>
                        <FaList /> Listar Blocos
                    </button>
                    <button className={`nav-btn ${view === "create" ? "active" : ""}`} onClick={() => setView("create")}>
                        <FaPlus /> Novo Bloco
                    </button>
                    <button className="nav-btn back" onClick={() => navigate('/home')}>
                        <FaArrowLeft /> Voltar ao Hub
                    </button>
                </div>
            </header>

            <main className="hub-content">
                {view === "list" && (
                    <BlockList onEdit={(b) => { setSelectedBlock(b); setView("update"); }} />
                )}
                {view === "create" && <BlockCreate goBack={() => setView("list")} />}
                {view === "update" && <BlockUpdate block={selectedBlock} goBack={() => setView("list")} />}
            </main>
        </div>
    );
};

export default BlockPage;