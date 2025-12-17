import "./RoomMenu.css";

const RoomMenu = ({ onSelect }) => {
    return (
        <div className="room-page">
            <div className="container-room">
                <h1>Room Management</h1>

                <button onClick={() => onSelect("create")}>Register Room</button>
                <button onClick={() => onSelect("list")}>List Rooms</button>
                <button onClick={() => onSelect("find")}>Find Room by ID</button>
                <button onClick={() => onSelect("update")}>Update Room</button>
                <button onClick={() => onSelect("delete")}>Delete Room</button>
            </div>
        </div>
    );
};

export default RoomMenu;
