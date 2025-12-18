import "./Home.css";

const Home = ({ onNavigate }) => {
    return (
        <div className="home-page">
            <div className="container-home">
                <img
                    src="/src/assets/Reserva_IFPB_2.png"
                    alt="Logo Reserva IFPB"
                    className="home-logo"
                />
                <h1>Main Menu</h1>

                <div className="menu-buttons">
                    <button onClick={() => onNavigate("campus")}>Campus Management</button>
                    <button onClick={() => onNavigate("block")}>Block Management</button>
                    <button onClick={() => onNavigate("room")}>Room Management</button>
                    <button onClick={() => onNavigate("reservation")}>Reservation Management</button>

                    <hr style={{ margin: '15px 0', opacity: '0.2' }} />

                    <button className="danger" onClick={() => onNavigate("login")}>Logout</button>
                </div>
            </div>
        </div>
    );
};

export default Home;