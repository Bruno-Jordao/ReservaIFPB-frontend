import { useState } from "react";
import axios from "axios";
import "./Block.css";

const BlockDelete = ({ goBack }) => {

    const [id, setId] = useState("");
    const [loading, setLoading] = useState(false);

    const handleDelete = async (e) => {
        e.preventDefault();

        if (!id) {
            alert("Enter a block ID");
            return;
        }

        const confirm = window.confirm(
            `Are you sure you want to delete block ID ${id}?`
        );

        if (!confirm) return;

        setLoading(true);

        try {
            await axios.delete(
                `http://localhost:8080/api/v1/blocks/${id}`
            );

            alert("Block deleted successfully");
            setId("");

        } catch (error) {
            console.error(error);
            alert("Error deleting block");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="block-page">
            <div className="container-block">
                <h1>Delete Block</h1>

                <form onSubmit={handleDelete}>
                    <div className="input-field">
                        <input
                            type="number"
                            placeholder="Block ID"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                        />
                    </div>

                    <button disabled={loading}>
                        {loading ? "Deleting..." : "Delete"}
                    </button>
                </form>

                <button onClick={goBack}>Back to menu</button>
            </div>
        </div>
    );
};

export default BlockDelete;

