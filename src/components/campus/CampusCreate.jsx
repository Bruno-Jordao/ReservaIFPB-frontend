import { useState } from "react";
import axios from "axios";
import "./Campus.css";

const CampusCreate = ({ goBack }) => {
    const [name, setName] = useState("");
    const [uf, setUf] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post("http://localhost:8080/api/v1/campus", {
                name,
                uf
            });

            alert("Campus created successfully!");
            setName("");
            setUf("");
        } catch (error) {
            console.error(error);
            alert("Error creating campus");
        }
    };

    return (
        <div className="campus-page">
            <div className="container-campus">
                <form onSubmit={handleSubmit}>
                    <h1>Register Campus</h1>

                    <input
                        placeholder="Campus name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />

                    <input
                        placeholder="UF"
                        value={uf}
                        onChange={e => setUf(e.target.value)}
                    />

                    <button>Create</button>
                    <button type="button" onClick={goBack}>Back</button>
                </form>
            </div>
        </div>
    );
};

export default CampusCreate;