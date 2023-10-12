import React, {useEffect, useRef, useState, useCallback, useContext}
    from 'react'
import {MainContext}
    from "components/Layer";

import {StyleCss}
    from './style.css'
const {
    ChatDeleteSpan
} = StyleCss

export const ChatDelete = ({index}) => {
    const deleteRef = useRef(<ChatDelete />)
    const {chats} = useContext(MainContext).state
    const {dispatch} = useContext(MainContext)
    const [width, setWidth] = useState(0)

    const chatDelete = useCallback((index) => {
        dispatch({type: 'CHAT_DELETE', payload: index})
        chats.forEach(chat => chat.isActive = false)
        dispatch({type: 'SET_CHAT_ACTIVE', payload: chats})
    }, [])
    useEffect(() => {
        setWidth(deleteRef.current.clientHeight)
    }, [])

    return (
        <ChatDeleteSpan
            onClick={() => chatDelete(index)}
            ref={deleteRef}
            width={width}>x</ChatDeleteSpan>
    )
}

