import { useState } from "react";
import axios from "axios";
import "./Block.css";

const BlockUpdate = ({ goBack }) => {

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [campusId, setCampusId] = useState("");
    const [loading, setLoading] = useState(false);

    const handleUpdate = async (e) => {
        e.preventDefault();

        if (!id || !name || !campusId) {
            alert("Fill all fields");
            return;
        }

        setLoading(true);

        try {
            await axios.put(
                `http://localhost:8080/api/v1/blocks/${id}`,
                {
                    name: name,
                    campusId: Number(campusId)
                }
            );

            alert("Block updated successfully");

            setId("");
            setName("");
            setCampusId("");

        } catch (error) {
            console.error(error);
            alert("Error updating block");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="block-page">
            <div className="container-block">
                <h1>Update Block</h1>

                <form onSubmit={handleUpdate}>
                    <div className="input-field">
                        <input
                            type="number"
                            placeholder="Block ID"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                        />
                    </div>

                    <div className="input-field">
                        <input
                            type="text"
                            placeholder="New name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="input-field">
                        <input
                            type="number"
                            placeholder="New Campus ID"
                            value={campusId}
                            onChange={(e) => setCampusId(e.target.value)}
                        />
                    </div>

                    <button disabled={loading}>
                        {loading ? "Updating..." : "Update"}
                    </button>
                </form>

                <button onClick={goBack}>Back to menu</button>
            </div>
        </div>
    );
};

export default BlockUpdate;

