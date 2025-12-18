import { useState } from "react";
import ReservationRegister from "./ReservationRegister";
import ReservationList from "./ReservationList";
import ReservationFind from "./ReservationFind";
import ReservationDelete from "./ReservationDelete";
import "./Reservation.css";

const ReservationPage = ({ goBack }) => {
    const [view, setView] = useState("menu");

    const renderView = () => {
        switch (view) {
            case "create":
                return <ReservationRegister goBack={() => setView("menu")} />;
            case "list":
                return <ReservationList goBack={() => setView("menu")} />;
            case "find":
                return <ReservationFind goBack={() => setView("menu")} />;
            case "delete":
                return <ReservationDelete goBack={() => setView("menu")} />;
            default:
                return (
                    <div className="container reservation-menu-container">
                        <h1>Reservation Menu</h1>
                        <div className="button-group">
                            <button onClick={() => setView("create")}>New Reservation</button>
                            <button onClick={() => setView("list")}>List All</button>
                            <button onClick={() => setView("find")}>Find by ID</button>
                            <button onClick={() => setView("delete")}>Delete Reservation</button>
                            <button type="button" className="secondary-button" onClick={goBack}>
                                Back to Home
                            </button>
                        </div>
                    </div>
                );
        }
    };

    return <div className="reservation-page">{renderView()}</div>;
};

export default ReservationPage;