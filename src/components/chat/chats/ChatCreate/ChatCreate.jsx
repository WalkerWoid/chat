import React, {useState, useContext, useCallback}
    from 'react'
import {MainContext}
    from "components/Layer";

import {StyleCss}
    from './style.css'
const {
    ChatCreateContainer,
    ChatCreateInput,
    ChatCreateButton
} = StyleCss

export const ChatCreate = () => {
    const [chatTitle, setChatTitle] = useState('')
    const {chats} = useContext(MainContext).state
    const {dispatch} = useContext(MainContext)

    const getNewId = () => {
        let id = 0
        for (let i = 0; i < chats.length; i++) {
            if (chats.find(chat => chat.id === id))
                id+=1
        }

        return id
    }
    const chatCreate = useCallback((title) => {
        if (title.length === 0)
            title = 'Новый чат'

        dispatch({type: 'CHAT_CREATE', payload: {id: getNewId(), title: title, messages: [], isActive: false}})
        setChatTitle('')
    }, [getNewId()])

    const handleChange = (event) => {
        setChatTitle(event.target.value)
    }

    return (
        <ChatCreateContainer>
            <ChatCreateButton
                type={'button'}
                onClick={() => chatCreate(chatTitle)}
            >
                +
            </ChatCreateButton>

            <ChatCreateInput
                onChange={handleChange}
                type={'text'}
                placeholder={'Введите название чата'}
                value={chatTitle}
            />
        </ChatCreateContainer>
    )
}