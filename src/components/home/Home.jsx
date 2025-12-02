// IdeaProjects/ReservaIFPB-frontend/src/components/home/Home.jsx
import React from 'react';
// FaBook (para Blocos/Salas), FaRegListAlt (para Reservas),
// FaBuilding (para Salas/Campus), FaUserCog (para Conta), FaSignOutAlt (para Sair)
// FaCalendarCheck (antiga) foi removida do uso ativo, mas mantida no import por enquanto
import { FaBook, FaCalendarCheck, FaRegListAlt, FaBuilding, FaUserCog, FaSignOutAlt } from "react-icons/fa";
import './Home.css';

const Home = () => {

    const handleAction = (action) => {
        alert(`Ação Selecionada: ${action}`);
        // Aqui você adicionaria a lógica de navegação real.
    };

    // SIMULAÇÃO DE PERFIL:
    const isAdministrator = true;

    return (
        <div className="container-home">
            <h1>Welcome to Reserva IFPB!</h1>
            <p>Select the desired action:</p>

            <div className="grid-options">

                {/* Reservation Options (Register Reservation foi removido) */}

                {/* 1. Reservations (All actions, including Register, will be here) */}
                <div className="card" onClick={() => handleAction("Reservations")}>
                    <FaRegListAlt className="icon-home"/>
                    <h2>Reservations</h2>
                </div>

                {/* 2. Rooms */}
                <div className="card" onClick={() => handleAction("Rooms")}>
                    <FaBuilding className="icon-home"/>
                    <h2>Rooms</h2>
                </div>

                {/* ADMIN OPTIONS */}
                {isAdministrator && (
                    <>
                        {/* 3. Campus (Admin Function - RF10) */}
                        <div className="card admin" onClick={() => handleAction("Campus")}>
                            <FaBuilding className="icon-home"/>
                            <h2>Campus</h2>
                        </div>

                        {/* 4. Blocks (Admin Function - CRUD Blocks) */}
                        <div className="card admin" onClick={() => handleAction("Blocks")}>
                            <FaBook className="icon-home"/>
                            <h2>Blocks</h2>
                        </div>
                    </>
                )}

                {/* General User Options */}

                {/* 5. Manage Account */}
                <div className="card" onClick={() => handleAction("Manage Account")}>
                    <FaUserCog className="icon-home"/>
                    <h2>Manage Account</h2>
                </div>

                {/* 6. Sign Out */}
                <div className="card logout" onClick={() => handleAction("Sign Out")}>
                    <FaSignOutAlt className="icon-home"/>
                    <h2>Sign Out</h2>
                </div>
            </div>
        </div>
    );
};

export default Home;