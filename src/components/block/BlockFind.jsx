import { useState } from "react";
import axios from "axios";
import "./Block.css";

const BlockFind = ({ goBack }) => {

    const [id, setId] = useState("");
    const [block, setBlock] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSearch = async (e) => {
        e.preventDefault();

        if (!id) {
            alert("Enter a block ID");
            return;
        }

        setLoading(true);
        setBlock(null);

        try {
            const response = await axios.get(
                `http://localhost:8080/api/v1/blocks/${id}`
            );
            setBlock(response.data);
        } catch (error) {
            console.error(error);
            alert("Block not found");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="block-page">
            <div className="container-block">
                <h1>Find Block</h1>

                <form onSubmit={handleSearch}>
                    <div className="input-field">
                        <input
                            type="number"
                            placeholder="Block ID"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                        />
                    </div>

                    <button disabled={loading}>
                        {loading ? "Searching..." : "Search"}
                    </button>
                </form>

                {block && (
                    <div className="block-item">
                        <strong>ID:</strong> {block.id} <br />
                        <strong>Name:</strong> {block.name} <br />
                        <strong>Campus ID:</strong> {block.campusId}
                    </div>
                )}

                <button onClick={goBack}>Back to menu</button>
            </div>
        </div>
    );
};

export default BlockFind;

