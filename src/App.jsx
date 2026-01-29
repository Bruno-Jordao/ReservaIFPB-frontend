import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Importação de Componentes
import Login from './components/login/Login';
import Register from './components/register/Register';
import Home from './components/home/Home';
import CampusPage from './components/campus/CampusPage';
import BlockPage from './components/block/BlockPage';
import RoomPage from './components/room/RoomPage';
import ReservationPage from './components/reservation/ReservationPage';

const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('token');
    return token ? children : <Navigate replace to="/" />;
};

function App() {
    return (
        <Router>
            <ToastContainer autoClose={3000} position="top-right" />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* Rotas Privadas - Removido o /* para evitar telas brancas */}
                <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
                <Route path="/campus" element={<PrivateRoute><CampusPage /></PrivateRoute>} />
                <Route path="/blocks" element={<PrivateRoute><BlockPage /></PrivateRoute>} />
                <Route path="/rooms" element={<PrivateRoute><RoomPage /></PrivateRoute>} />
                <Route path="/reservations" element={<PrivateRoute><ReservationPage /></PrivateRoute>} />

                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
}

export default App;