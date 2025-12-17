import { useState } from "react";
import axios from "axios";
import "./Campus.css";

const CampusFind = ({ goBack }) => {
    const [id, setId] = useState("");
    const [campus, setCampus] = useState(null);

    const handleSearch = async () => {
        try {
            const response = await axios.get(
                `http://localhost:8080/api/v1/campus/${id}`
            );
            setCampus(response.data);
        } catch (error) {
            console.error(error);
            alert("Campus not found");
            setCampus(null);
        }
    };

    return (
        <div className="campus-page">
            <div className="container-campus">
                <h1>Find Campus</h1>

                <input
                    placeholder="Campus ID"
                    value={id}
                    onChange={e => setId(e.target.value)}
                />

                <button onClick={handleSearch}>Search</button>

                {campus && (
                    <div className="result-box">
                        <p><strong>ID:</strong> {campus.id}</p>
                        <p><strong>Name:</strong> {campus.name}</p>
                        <p><strong>UF:</strong> {campus.uf}</p>
                    </div>
                )}

                <button onClick={goBack}>Back</button>
            </div>
        </div>
    );
};

export default CampusFind;
