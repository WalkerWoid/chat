export const CHAT_CREATE = 'CHAT_CREATE'
export const CHAT_DELETE = 'CHAT_DELETE'
export const SEND_MESSAGE = 'SEND_MESSAGE'
export const SET_ACTIVE_CHAT = 'SET_ACTIVE_CHAT'

export const chatCreateAction = (newChat) => {
    return {
        type: CHAT_CREATE,
        payload: newChat
    }
}
export const setActiveChatAction = (chats) => {
    return {
        type: SET_ACTIVE_CHAT,
        payload: chats
    }
}
export const chatDeleteAction = (chatIdToDelete) => {
    return {
        type: CHAT_DELETE,
        payload: chatIdToDelete
    }
}
export const sendMessageAction = ({message, id}) => {
    return {
        type: SEND_MESSAGE,
        payload: {message, id}
    }
}