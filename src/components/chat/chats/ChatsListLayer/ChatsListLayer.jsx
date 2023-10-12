import React
    from "react";

import {ChatCreate}
    from "chats/ChatCreate";
import {ChatsList}
    from "chats/ChatsList";

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
            <ChatCreate />
            <ChatsList />
        </ChatsContainer>
    )
}