import React
    from "react";

import {ChatCreateContainer}
    from "containers/ChatCreateContainer";
import {ChatsListContainer}
    from "containers/ChatsListContainer";

import {styleCss}
    from './style.css'

const {
    ChatsContainer,
    ChatsHeader,
} = styleCss


export const ChatsListLayer = () => {
    return (
        <ChatsContainer>
            <ChatsHeader>Чаты</ChatsHeader>
            <ChatCreateContainer />
            <ChatsListContainer />
        </ChatsContainer>
    )
}