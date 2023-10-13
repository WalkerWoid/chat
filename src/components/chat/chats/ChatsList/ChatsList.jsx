import React
    from "react";
import {useNavigate}
    from "react-router-dom";

import {ChatDeleteContainer}
    from "containers/ChatDeleteContainer";

import {StyleCss}
    from './style.css'

const {
    ChatUl,
    ChatLi,
    ChatP,
    NoChats
} = StyleCss

export const ChatsList = ({chats, setActiveChat}) => {
    const navigate = useNavigate()

    return (
        <ChatUl>
            {
                chats.map((chat, index) => {
                    return (
                        <ChatLi key={chat.id}>
                            <ChatP
                                $active={chat.isActive.toString()}
                                onClick={() => {
                                    navigate(`/chat/${index}`)
                                    setActiveChat(index)
                                }}>
                                {chat.title}
                            </ChatP>
                            <ChatDeleteContainer index={index} />
                        </ChatLi>
                    )
                })
            }
            {
                chats.length === 0 && <NoChats>{ 'Чатов нет, создайте новый'}</NoChats>
            }
        </ChatUl>
    )
}

