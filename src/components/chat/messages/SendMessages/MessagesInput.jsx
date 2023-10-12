import React, {useState, useCallback, useContext}
    from "react";
import {nanoid}
    from "nanoid";
import {MainContext}
    from "components/Layer";

import {StyleCss}
    from './style.css'
const {
    SendContainer,
    SendInput,
    SendButton
} = StyleCss

export const SendMessages = ({chats, id, dispatch}) => {
    const [message, setMessage] = useState('')
    const author = useContext(MainContext).state.profile.name.value

    const changeHandler = (event) => {
        setMessage(event.target.value)
    }
    const sendMessage = useCallback(() => {
        if (message) {
            chats[id].messages.push({id: nanoid(), message, author})
            dispatch({type: 'ADD_MESSAGE', payload: chats})
            setMessage('')
        }
    }, [message])

    return (
        <SendContainer>
            <SendInput
                type={'text'}
                placeholder={'Введите сообщение'}
                onChange={changeHandler}
                value={message}/>
            <SendButton type={'button'} onClick={() => sendMessage()}>Отправить</SendButton>
        </SendContainer>
    )
}