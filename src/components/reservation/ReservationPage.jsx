import { useState } from "react";
import ReservationMenu from "./ReservationMenu";
import ReservationRegister from "./ReservationRegister";
import ReservationList from "./ReservationList";
import ReservationFind from "./ReservationFind";
import ReservationUpdate from "./ReservationUpdate";
import ReservationDelete from "./ReservationDelete";

const ReservationPage = ({ goHome }) => {
    const [screen, setScreen] = useState("menu");

    switch (screen) {
        case "create":
            return <ReservationRegister goBack={() => setScreen("menu")} />;
        case "list":
            return <ReservationList goBack={() => setScreen("menu")} />;
        case "find":
            return <ReservationFind goBack={() => setScreen("menu")} />;
        case "update":
            return <ReservationUpdate goBack={() => setScreen("menu")} />;
        case "delete":
            return <ReservationDelete goBack={() => setScreen("menu")} />;
        default:
            return <ReservationMenu onSelect={setScreen} goHome={goHome} />;
    }
};

export default ReservationPage;