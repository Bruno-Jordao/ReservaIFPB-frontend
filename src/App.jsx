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

// Componente para proteger rotas privadas
const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('token');
    return token ? children : <Navigate replace to="/" />;
};

function App() {
    return (
        <Router>
            <ToastContainer autoClose={3000} position="top-right" />
            <Routes>
                {/* Rotas Públicas */}
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* Rotas Privadas (Protegidas) */}
                <Route path="/home" element={
                    <PrivateRoute>
                        <Home />
                    </PrivateRoute>
                } />

                {/* Padronização para Plural conforme definido no Home.jsx */}
                <Route path="/campus" element={
                    <PrivateRoute>
                        <CampusPage />
                    </PrivateRoute>
                } />

                <Route path="/blocks/*" element={
                    <PrivateRoute>
                        <BlockPage />
                    </PrivateRoute>
                } />

                <Route path="/rooms/*" element={
                    <PrivateRoute>
                        <RoomPage />
                    </PrivateRoute>
                } />

                <Route path="/reservations/*" element={
                    <PrivateRoute>
                        <ReservationPage />
                    </PrivateRoute>
                } />

                {/* Redirecionamento de rotas inexistentes */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
}

export default App;