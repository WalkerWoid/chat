import React
    from "react";
import update
    from 'react-addons-update'
import {
    CHAT_CREATE,
    SET_ACTIVE_CHAT,
    CHAT_DELETE,
    SEND_MESSAGE
} from "actions/chatAction";

import {initialState}
    from "data/initialChatState";

export const ChatReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHAT_CREATE: {
            return update(state, {
                chats: {
                    $push: [action.payload]
                }
            })
        }
        case SET_ACTIVE_CHAT: {
            return update(state, {
                chats: {
                    $set: state.chats
                }
            })
        }
        case CHAT_DELETE: {
            return update(state, {
                chats: {
                    $set: state.chats.filter(chat => state.chats.indexOf(chat) !== action.payload)
                }
            })
        }
        case SEND_MESSAGE: {
            return update(state, {
                chats: {
                    [action.payload.id]: {
                        messages: {
                            $push: [action.payload.message]
                        }
                    }
                }
            })
        }
        default:
            return state
    }
}
