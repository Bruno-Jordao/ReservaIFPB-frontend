import { useState } from "react";
import Home from "./components/home/Home";
import CampusPage from "./components/campus/CampusPage";
import ReservationPage from "./components/reservation/ReservationPage";
// Importe os outros componentes conforme sua estrutura
import BlockPage from "./components/block/BlockPage";
import RoomPage from "./components/room/RoomPage";
import Login from "./components/login/Login";

function App() {
    const [currentPage, setCurrentPage] = useState("home");

    // Função que será passada para a Home
    const handleNavigate = (page) => {
        setCurrentPage(page);
    };

    // Função para voltar à Home (passada para as subpáginas)
    const goHome = () => setCurrentPage("home");

    const renderPage = () => {
        switch (currentPage) {
            case "home":
                return <Home onNavigate={handleNavigate} />;
            case "campus":
                return <CampusPage goHome={goHome} />;
            case "reservation":
                return <ReservationPage goHome={goHome} />;
            case "block":
                return <BlockPage goHome={goHome} />;
            case "room":
                return <RoomPage goHome={goHome} />;
            case "login":
                return <Login onLoginSuccess={() => setCurrentPage("home")} />;
            default:
                return <Home onNavigate={handleNavigate} />;
        }
    };

    return (
        <div className="App">
            {renderPage()}
        </div>
    );
}

export default App;