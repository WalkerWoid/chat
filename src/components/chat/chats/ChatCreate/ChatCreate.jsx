import React, {useState}
    from 'react'

import {StyleCss}
    from './style.css'
const {
    ChatCreateContainer,
    ChatCreateInput,
    ChatCreateButton
} = StyleCss

export const ChatCreate = ({chatCreate}) => {
    const [chatTitle, setChatTitle] = useState('')
    const chatCreateHandler = () => {
        chatCreate(chatTitle)
        setChatTitle('')
    }

    const handleChange = (event) => {
        setChatTitle(event.target.value)
    }

    return (
        <ChatCreateContainer>
            <ChatCreateButton
                type={'button'}
                onClick={() => chatCreateHandler()}
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