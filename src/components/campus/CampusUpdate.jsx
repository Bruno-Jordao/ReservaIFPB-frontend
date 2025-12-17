import { useState } from "react";
import axios from "axios";
import "./Campus.css";

const CampusUpdate = ({ goBack }) => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [uf, setUf] = useState("");

    const handleUpdate = async () => {
        try {
            await axios.put(
                `http://localhost:8080/api/v1/campus/${id}`,
                { name, uf }
            );

            alert("Campus updated successfully!");
            setId("");
            setName("");
            setUf("");
        } catch (error) {
            console.error(error);
            alert("Error updating campus");
        }
    };

    return (
        <div className="campus-page">
            <div className="container-campus">
                <h1>Update Campus</h1>

                <input
                    placeholder="Campus ID"
                    value={id}
                    onChange={e => setId(e.target.value)}
                />

                <input
                    placeholder="New Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <input
                    placeholder="New UF"
                    value={uf}
                    onChange={e => setUf(e.target.value)}
                />

                <button onClick={handleUpdate}>Update</button>
                <button onClick={goBack}>Back</button>
            </div>
        </div>
    );
};

export default CampusUpdate;
