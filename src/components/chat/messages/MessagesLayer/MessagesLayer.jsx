import React
    , {useContext} from "react";
import {MainContext}
    from "components/Layer";
import {useParams} from "react-router-dom";

import {StyleCss}
    from "./style.css"
import {MessagesList}
    from "messages/MessagesList";
import {SendMessages}
    from "messages/SendMessages";

const {
    MessagesContainer,
    MessagesH2,
    ErrorChatP
} = StyleCss

export const MessagesLayer = () => {
    const {chats} = useContext(MainContext).state
    const {dispatch} = useContext(MainContext)
    const {id} = useParams()

    return (
        <MessagesContainer>
            <MessagesH2>
                {
                    id < chats.length && chats[id].isActive ? chats[id].title : 'Сообщения'
                }
            </MessagesH2>
            {
                id < chats.length && chats[id].isActive
                    ?
                    <>
                        <MessagesList id={id} chats={chats} />
                        <SendMessages id={id} chats={chats} dispatch={dispatch}/>
                    </>
                    : <ErrorChatP>Выберите чат слева</ErrorChatP>
            }

        </MessagesContainer>
    )
}

/**
 * todo - при удалении чата, если удален даже не активный чат, то чаты сбрасываются. Происходит это из за такой проверки,
    так как чаты сравниваются по id */