import { useEffect, useState } from "react";
import axios from "axios";
import "./Campus.css";

const CampusList = ({ goBack }) => {
    const [campus, setCampus] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/v1/campus")
            .then(res => setCampus(res.data))
            .catch(() => alert("Error loading campus"));
    }, []);

    return (
        <div className="campus-page">
            <div className="container-campus">
                <h1>Registered Campus</h1>

                <ul className="campus-list">
                    {campus.map(c => (
                        <li key={c.id} className="campus-item">
                            <strong>ID:</strong> {c.id}<br />
                            <strong>Name:</strong> {c.name}<br />
                            <strong>UF:</strong> {c.uf}
                        </li>
                    ))}
                </ul>

                <button onClick={goBack}>Back</button>
            </div>
        </div>
    );
};

export default CampusList;
