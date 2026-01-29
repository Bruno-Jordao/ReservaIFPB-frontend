import { useState } from "react";
import ReservationList from "./ReservationList";
import ReservationRegister from "./ReservationRegister";
import ReservationUpdate from "./ReservationUpdate";

const ReservationPage = () => {
    const [view, setView] = useState("list");
    const [selectedReservation, setSelectedReservation] = useState(null);

    const handleEdit = (reservation) => {
        setSelectedReservation(reservation);
        setView("update");
    };

    const handleBack = () => {
        setSelectedReservation(null);
        setView("list");
    };

    return (
        <div className="reservation-management">
            <div className="reservation-actions">
                <button onClick={() => setView("list")}>Minhas Reservas</button>
                <button onClick={() => setView("create")}>Nova Reserva</button>
            </div>

            <div className="reservation-content">
                {view === "list" && (
                    <ReservationList onEdit={handleEdit} />
                )}

                {view === "create" && (
                    <ReservationRegister goBack={handleBack} />
                )}

                {view === "update" && (
                    <ReservationUpdate
                        reservation={selectedReservation}
                        goBack={handleBack}
                    />
                )}
            </div>
        </div>
    );
};

export default ReservationPage;