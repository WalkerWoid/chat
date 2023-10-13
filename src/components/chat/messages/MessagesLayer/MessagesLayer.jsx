import React
    from "react";
import {useParams} from "react-router-dom";

import {StyleCss}
    from "./style.css"
import {MessagesListContainer}
    from "containers/MessagesListContainer";
import {SendMessageContainer}
    from "containers/SendMessageContainer";

const {
    MessagesContainer,
    MessagesH2,
    ErrorChatP
} = StyleCss

export const MessagesLayer = ({chats}) => {
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
                        <MessagesListContainer id={id} />
                        <SendMessageContainer id={id} />
                    </>
                    : <ErrorChatP>Выберите чат слева</ErrorChatP>
            }

        </MessagesContainer>
    )
}

/**
 * todo - при удалении чата, если удален даже не активный чат, то чаты сбрасываются. Происходит это из за такой проверки,
    так как чаты сравниваются по id */