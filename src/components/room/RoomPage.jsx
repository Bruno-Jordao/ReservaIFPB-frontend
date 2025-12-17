import { useState } from "react";

import RoomMenu from "./RoomMenu";
import RoomCreate from "./RoomCreate";
import RoomList from "./RoomList";
import RoomFind from "./RoomFind";
import RoomUpdate from "./RoomUpdate";
import RoomDelete from "./RoomDelete";

const RoomPage = () => {
    const [screen, setScreen] = useState("menu");

    switch (screen) {
        case "create":
            return <RoomCreate goBack={() => setScreen("menu")} />;
        case "list":
            return <RoomList goBack={() => setScreen("menu")} />;
        case "find":
            return <RoomFind goBack={() => setScreen("menu")} />;
        case "update":
            return <RoomUpdate goBack={() => setScreen("menu")} />;
        case "delete":
            return <RoomDelete goBack={() => setScreen("menu")} />;
        default:
            return <RoomMenu onSelect={setScreen} />;
    }
};

export default RoomPage;
