import "./Reservation.css";

const ReservationMenu = ({ onSelect, goHome }) => {
    return (
        <div className="reservation-page">
            <div className="container-reservation">
                <h1>Reservation Management</h1>

                <div className="menu-buttons">
                    <button onClick={() => onSelect("create")}>Register Reservation</button>
                    <button onClick={() => onSelect("list")}>List Reservations</button>
                    <button onClick={() => onSelect("find")}>Find Reservation</button>
                    <button onClick={() => onSelect("update")}>Update Reservation</button>
                    <button onClick={() => onSelect("delete")}>Cancel Reservation</button>

                    <hr style={{ margin: '15px 0', opacity: '0.2' }} />

                    <button onClick={goHome} className="secondary">Back to Home</button>
                </div>
            </div>
        </div>
    );
};

export default ReservationMenu;