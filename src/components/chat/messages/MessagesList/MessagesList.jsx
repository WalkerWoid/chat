import React, {useEffect, useRef, useState}
    from "react";

import {StyleCss}
    from './style.css'

const {
    MessagesUl,
    MessagesLi,
    MessagesP,
    MessagesSpan,
    NoMessagesP
} = StyleCss

export const MessagesList = ({id, chats}) => {
    const authorRef = useRef(<MessagesSpan />)
    const [width, setWidth] = useState(0)

    useEffect(() => {
        if (authorRef.current)
            setWidth(authorRef.current.clientHeight)
    }, [authorRef])

    return (
        <MessagesUl>
            {
                chats[id].messages.map((message) => {
                    return (
                        <MessagesLi key={message.id}>
                            <MessagesSpan ref={authorRef} width={width}>{message.author.at(0)}</MessagesSpan>
                            <MessagesP>{message.message}</MessagesP>
                        </MessagesLi>
                    )
                })
            }
            {chats[id].messages.length === 0 && <NoMessagesP ref={authorRef}>Сообщений пока нет</NoMessagesP>}
        </MessagesUl>
    )
}