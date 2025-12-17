import "./CampusMenu.css";

const CampusMenu = ({ onSelect, goHome }) => {
    return (
        <div className="campus-page">
            <div className="container-campus">
                <h1>Campus Management</h1>

                <button onClick={() => onSelect("create")}>Register Campus</button>
                <button onClick={() => onSelect("list")}>List Campus</button>
                <button onClick={() => onSelect("find")}>Find Campus by ID</button>
                <button onClick={() => onSelect("update")}>Update Campus</button>
                <button onClick={() => onSelect("delete")}>Delete Campus</button>

                <button onClick={goHome}>Back to Home</button>
            </div>
        </div>
    );
};

export default CampusMenu;