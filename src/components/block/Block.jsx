import { useState } from "react";
import axios from "axios";
import "./Block.css";

const Block = () => {

    const [name, setName] = useState("");
    const [campusId, setCampusId] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post("http://localhost:8080/api/v1/blocks", {
                name: name,
                campusId: Number(campusId)
            });

            console.log(response.data);
            alert("Block created successfully!");

        } catch (error) {
            console.error(error);
            alert("Error creating block");
        }
    };

    return (
        <div className="container-block">
            <form onSubmit={handleSubmit}>
                <h1>Register a new Block</h1>

                <div className="input-field">
                    <input 
                        type="text"
                        placeholder="Block name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="input-field">
                    <input 
                        type="number"
                        placeholder="Campus ID"
                        onChange={(e) => setCampusId(e.target.value)}
                    />
                </div>

                <button>Create Block</button>
            </form>
        </div>
    );
}

export default Block;
