import React from 'react';
import './Home.css';

const Home = ({ setCurrentPage, logout }) => {
    return (
        <div className="home-container">
            <h1>IFPB Reservation System</h1>
            <p>Welcome! Select an option below to manage the system.</p>

            <div className="button-group main-menu" style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%' }}>
                <button onClick={() => setCurrentPage("campus")}>
                    Manage Campi
                </button>
                <button onClick={() => setCurrentPage("block")}>
                    Manage Blocks
                </button>
                <button onClick={() => setCurrentPage("room")}>
                    Manage Rooms
                </button>
                <button onClick={() => setCurrentPage("reservation")}>
                    Reservations
                </button>

                <button
                    className="secondary-button"
                    onClick={logout}
                    style={{ marginTop: '20px', backgroundColor: '#d32f2f', color: 'white' }}
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Home;