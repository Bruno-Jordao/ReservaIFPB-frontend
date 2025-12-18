import "./BlockMenu.css";

const BlockMenu = ({ onSelect, goHome }) => {
    return (
        <div className="block-page">
            <div className="container-block">
                <h1>Block Management</h1>

                <button onClick={() => onSelect("create")}>Register Block</button>
                <button onClick={() => onSelect("list")}>List Blocks</button>
                <button onClick={() => onSelect("find")}>Find Block by ID</button>
                <button onClick={() => onSelect("update")}>Update Block</button>
                <button onClick={() => onSelect("delete")}>Delete Block</button>

                <button onClick={goHome}>Back to Home</button>
            </div>
        </div>
    );
};

export default BlockMenu;

