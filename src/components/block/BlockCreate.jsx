import { useState } from "react";
import axios from "axios";
import "./Block.css";

const BlockCreate = ({ goBack }) => {

    const [name, setName] = useState("");
    const [campusId, setCampusId] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!name || !campusId) {
            alert("Fill all fields");
            return;
        }

        setLoading(true);

        try {
            const response = await axios.post(
                "http://localhost:8080/api/v1/blocks",
                {
                    name: name,
                    campusId: Number(campusId)
                }
            );

            console.log(response.data);
            alert("Block created successfully!");

            // limpa os campos após sucesso
            setName("");
            setCampusId("");

        } catch (error) {
            console.error(error);
            alert("Error creating block");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="block-page">
            <div className="container-block">
                <form onSubmit={handleSubmit}>
                    <h1>Register a new Block</h1>

                    <div className="input-field">
                        <input
                            type="text"
                            placeholder="Block name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="input-field">
                        <input
                            type="number"
                            placeholder="Campus ID"
                            value={campusId}
                            onChange={(e) => setCampusId(e.target.value)}
                        />
                    </div>

                    <button disabled={loading}>
                        {loading ? "Creating..." : "Create Block"}
                    </button>

                    <button
                        type="button"
                        className="secondary-button"
                        onClick={goBack}
                    >
                        Back to menu
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BlockCreate;