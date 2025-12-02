import { useState } from "react";
import axios from "axios";
import "./Campus.css";

const Campus = () => {

    const [name, setName] = useState("");
    const [uf, setUf] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post("http://localhost:8080/api/v1/campus", {
                name: name,
                uf: uf
            });

            console.log(response.data);
            alert("Campus created successfully!");

        } catch (error) {
            console.error(error);
            alert("Error creating campus");
        }
    };

    return (
        <div className="container-campus">
            <form onSubmit={handleSubmit}>
                <h1>Register a new Campus</h1>

                <div className="input-field">
                    <input 
                        type="text" 
                        placeholder='Campus name'
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="input-field">
                    <input 
                        type="text" 
                        placeholder='UF (e.g., PB, PE, RN)'
                        onChange={(e) => setUf(e.target.value)}
                    />
                </div>

                <button>Create Campus</button>
            </form>
        </div>
    );
}

export default Campus;
