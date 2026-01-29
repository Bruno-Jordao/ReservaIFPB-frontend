import { useState } from "react";
import BlockList from "./BlockList";
import BlockCreate from "./BlockCreate";
import BlockUpdate from "./BlockUpdate";

const BlockPage = () => {
    const [view, setView] = useState("list");
    const [selectedBlock, setSelectedBlock] = useState(null);

    const handleEdit = (block) => {
        setSelectedBlock(block);
        setView("update");
    };

    const handleBack = () => {
        setSelectedBlock(null);
        setView("list");
    };

    return (
        <div className="page-container">
            <div className="menu-simples">
                <button onClick={() => setView("list")}>Listar</button>
                <button onClick={() => setView("create")}>Novo</button>
            </div>

            {view === "list" && <BlockList onEdit={handleEdit} />}
            {view === "create" && <BlockCreate goBack={handleBack} />}
            {view === "update" && <BlockUpdate block={selectedBlock} goBack={handleBack} />}
        </div>
    );
};

export default BlockPage;