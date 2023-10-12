import React
    from "react";
import {Outlet}
    from "react-router-dom";

import {ChatsListLayer}
    from "chats/ChatsListLayer";

export const ChatLayer = () => {
    return (
        <>
            <ChatsListLayer />
            <Outlet />
        </>
    )
}