import { useState } from "react";

import BlockMenu from "./BlockMenu";
import BlockCreate from "./BlockCreate";
import BlockList from "./BlockList";
import BlockFind from "./BlockFind";
import BlockUpdate from "./BlockUpdate";
import BlockDelete from "./BlockDelete";

const BlockPage = ({ goHome }) => {
    const [screen, setScreen] = useState("menu");

    switch (screen) {
        case "create":
            return <BlockCreate goBack={() => setScreen("menu")} />;
        case "list":
            return <BlockList goBack={() => setScreen("menu")} />;
        case "find":
            return <BlockFind goBack={() => setScreen("menu")} />;
        case "update":
            return <BlockUpdate goBack={() => setScreen("menu")} />;
        case "delete":
            return <BlockDelete goBack={() => setScreen("menu")} />;
        default:
            return <BlockMenu onSelect={setScreen} goHome={goHome} />;
    }
};

export default BlockPage;
