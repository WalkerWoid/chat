import React, {useState}
    from "react";

import {StyleCss}
    from './style.css'
const {
    SendContainer,
    SendInput,
    SendButton
} = StyleCss

export const SendMessage = ({sendMessage}) => {
    const [message, setMessage] = useState('')

    const changeHandler = (event) => {
        setMessage(event.target.value)
    }
    const sendMessageHandler = () => {
        sendMessage(message)
        setMessage('')
    }

    return (
        <SendContainer>
            <SendInput
                type={'text'}
                placeholder={'Введите сообщение'}
                onChange={changeHandler}
                value={message}/>
            <SendButton type={'button'} onClick={() => sendMessageHandler()}>Отправить</SendButton>
        </SendContainer>
    )
}