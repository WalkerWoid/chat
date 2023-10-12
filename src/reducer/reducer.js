import React from "react";

export const Reducer = (state, action) => {
    switch (action.type) {
        case 'CHAT_CREATE': {
            return {
                ...state,
                chats: [...state.chats, action.payload]
            }
        }
        case 'CHAT_DELETE': {
            return {
                ...state,
                chats: state.chats.filter(chat => state.chats.indexOf(chat) !== action.payload)
            }
        }
        case 'ADD_MESSAGE': {
            return {
                ...state,
                chats: action.payload
            }
        }
        case 'SET_ACTIVE_CHAT': {
            return {
                ...state,
                chats: state.chats
            }
        }
        case 'CHANGE_PROFILE': {
            return {
                ...state,
                profile: {
                    ...state.profile,
                    [action.payload.engText]: {
                        ...state.profile[action.payload.engText],
                        value: action.payload.newValue
                    }
                }
            }
        }
        default:
            return state
    }
}
