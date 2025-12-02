
import React from 'react';

import { FaBook, FaCalendarCheck, FaRegListAlt, FaBuilding, FaUserCog, FaSignOutAlt } from "react-icons/fa";
import './Home.css';

const Home = () => {

    const handleAction = (action) => {
        alert(`Ação Selecionada: ${action}`);
    };

    const isAdministrator = true;

    return (
        <div className="container-home">
            <h1>Welcome to Reserva IFPB!</h1>
            <p>Select the desired action:</p>

            <div className="grid-options">

                <div className="card" onClick={() => handleAction("Reservations")}>
                    <FaRegListAlt className="icon-home"/>
                    <h2>Reservations</h2>
                </div>


                <div className="card" onClick={() => handleAction("Rooms")}>
                    <FaBuilding className="icon-home"/>
                    <h2>Rooms</h2>
                </div>


                {isAdministrator && (
                    <>

                        <div className="card admin" onClick={() => handleAction("Campus")}>
                            <FaBuilding className="icon-home"/>
                            <h2>Campus</h2>
                        </div>


                        <div className="card admin" onClick={() => handleAction("Blocks")}>
                            <FaBook className="icon-home"/>
                            <h2>Blocks</h2>
                        </div>
                    </>
                )}


                <div className="card" onClick={() => handleAction("Manage Account")}>
                    <FaUserCog className="icon-home"/>
                    <h2>Manage Account</h2>
                </div>

                <div className="card logout" onClick={() => handleAction("Sign Out")}>
                    <FaSignOutAlt className="icon-home"/>
                    <h2>Sign Out</h2>
                </div>
            </div>
        </div>
    );
};

export default Home;