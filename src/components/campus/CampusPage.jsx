import { useState } from "react";

import CampusMenu from "./CampusMenu";
import CampusCreate from "./CampusCreate";
import CampusList from "./CampusList";
import CampusFind from "./CampusFind";
import CampusUpdate from "./CampusUpdate";
import CampusDelete from "./CampusDelete";

const CampusPage = ({ goHome }) => {
    const [screen, setScreen] = useState("menu");

    switch (screen) {
        case "create":
            return <CampusCreate goBack={() => setScreen("menu")} />;
        case "list":
            return <CampusList goBack={() => setScreen("menu")} />;
        case "find":
            return <CampusFind goBack={() => setScreen("menu")} />;
        case "update":
            return <CampusUpdate goBack={() => setScreen("menu")} />;
        case "delete":
            return <CampusDelete goBack={() => setScreen("menu")} />;
        default:
            return <CampusMenu onSelect={setScreen} goHome={goHome} />;
    }
};

export default CampusPage;