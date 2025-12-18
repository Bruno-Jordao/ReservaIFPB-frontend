import { useState } from "react";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import CampusPage from "./components/campus/CampusPage";
import BlockPage from "./components/block/BlockPage";
import RoomPage from "./components/room/RoomPage";
import ReservationPage from "./components/reservation/ReservationPage";
import "./App.css";

function App() {
    const [currentPage, setCurrentPage] = useState("home");

    const renderPage = () => {
        switch (currentPage) {
            case "home":
                return (
                    <Home
                        setCurrentPage={setCurrentPage}
                        logout={() => setCurrentPage("login")}
                    />
                );

            case "login":
                return (
                    <Login
                        goBack={() => setCurrentPage("home")}
                        goToRegister={() => setCurrentPage("register")}
                    />
                );

            case "register":
                return <Register goBack={() => setCurrentPage("login")} />;

            case "campus":
                return <CampusPage goBack={() => setCurrentPage("home")} />;

            case "block":
                return <BlockPage goBack={() => setCurrentPage("home")} />;

            case "room":
                return <RoomPage goBack={() => setCurrentPage("home")} />;

            case "reservation":
                return <ReservationPage goBack={() => setCurrentPage("home")} />;

            default:
                return <Home setCurrentPage={setCurrentPage} logout={() => setCurrentPage("login")} />;
        }
    };

    return (
        <div className="App">
            {renderPage()}
        </div>
    );
}

export default App;