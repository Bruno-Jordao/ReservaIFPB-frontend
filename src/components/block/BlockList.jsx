import { useEffect, useState } from "react";
import axios from "axios";
import "./Block.css";

const BlockList = ({ goBack }) => {

    const [blocks, setBlocks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlocks = async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/v1/blocks");
                setBlocks(response.data);
            } catch (error) {
                console.error(error);
                alert("Error loading blocks");
            } finally {
                setLoading(false);
            }
        };

        fetchBlocks();
    }, []);

    return (
        <div className="block-page">
            <div className="container-block">
                <h1>Registered Blocks</h1>

                {loading && <p className="info-text">Loading...</p>}

                {!loading && blocks.length === 0 && (
                    <p className="info-text">No blocks found</p>
                )}

                {!loading && blocks.length > 0 && (
                    <ul className="block-list">
                        {blocks.map((block) => (
                            <li key={block.id} className="block-item">
                                <strong>ID:</strong> {block.id} <br />
                                <strong>Name:</strong> {block.name} <br />
                                <strong>Campus ID:</strong> {block.campusId}
                            </li>
                        ))}
                    </ul>
                )}

                <button onClick={goBack}>Back to menu</button>
            </div>
        </div>
    );
};

export default BlockList;
