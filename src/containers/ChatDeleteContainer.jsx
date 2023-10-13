import React
    from "react";
import {connect}
    from "react-redux";
import {ChatDelete}
    from "chats/ChatDelete";

import {chatDeleteAction, setActiveChatAction}
    from "actions/chatAction";

class ChatDeleteContainerClass extends React.Component {
    chatDelete = () => {
        const {index, chats, chatDelete, setActiveChat} = this.props

        chatDelete(index)
        chats.forEach(chat => chat.isActive = false)
        setActiveChat(chats)
    }
    render() {
        return (
            <ChatDelete chatDelete={this.chatDelete} />
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        chatDelete: (chatIdToDelete) => dispatch(chatDeleteAction(chatIdToDelete)),
        setActiveChat: (chats) => dispatch(setActiveChatAction(chats))
    }
}

function mapStateToProps(state) {
    return {
        chats: state.chat.chats
    }
}

export const ChatDeleteContainer = connect(mapStateToProps, mapDispatchToProps)(ChatDeleteContainerClass)
