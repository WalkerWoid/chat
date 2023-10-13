import React, {useEffect, useRef, useState}
    from 'react'

import {StyleCss}
    from './style.css'
const {
    ChatDeleteSpan
} = StyleCss

export const ChatDelete = ({chatDelete}) => {
    const deleteRef = useRef(<ChatDelete />)
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(deleteRef.current.clientHeight)
    }, [])

    return (
        <ChatDeleteSpan
            onClick={() => chatDelete()}
            ref={deleteRef}
            width={width}>x</ChatDeleteSpan>
    )
}

