import { useState } from "react";
import axios from "axios";
import "./Campus.css";

const CampusDelete = ({ goBack }) => {
    const [id, setId] = useState("");

    const handleDelete = async () => {
        if (!window.confirm("Are you sure you want to delete this campus?")) {
            return;
        }

        try {
            await axios.delete(
                `http://localhost:8080/api/v1/campus/${id}`
            );
            alert("Campus deleted successfully!");
            setId("");
        } catch (error) {
            console.error(error);
            alert("Error deleting campus");
        }
    };

    return (
        <div className="campus-page">
            <div className="container-campus">
                <h1>Delete Campus</h1>

                <input
                    placeholder="Campus ID"
                    value={id}
                    onChange={e => setId(e.target.value)}
                />

                <button className="danger" onClick={handleDelete}>
                    Delete
                </button>

                <button onClick={goBack}>Back</button>
            </div>
        </div>
    );
};

export default CampusDelete;
