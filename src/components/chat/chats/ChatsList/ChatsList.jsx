import React, {useContext, useEffect}
    from "react";
import {useParams}
    from "react-router-dom";
import {MainContext}
    from "components/Layer";
import {useNavigate}
    from "react-router-dom";

import {ChatDelete}
    from "chats/ChatDelete";

import {StyleCss}
    from './style.css'

const {
    ChatUl,
    ChatLi,
    ChatP,
    NoChats
} = StyleCss

export const ChatsList = () => {
    const {chats} = useContext(MainContext).state
    const {dispatch} = useContext(MainContext)
    const navigate = useNavigate()
    const {index} = useParams()

    useEffect(() => {
        if (index)
            setActiveChat(+index)
    }, [])

    const setActiveChat = (index) => {
        chats.forEach(chat => chat.isActive ? chat.isActive = false : '')
        chats[index].isActive = true
        dispatch({type: 'SET_ACTIVE_CHAT', payload: chats})
    }

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
                            <ChatDelete index={index} />
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

