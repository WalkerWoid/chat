import React
    from "react";
import {connect}
    from "react-redux";
import {ChatsList}
    from "chats/ChatsList";

import {setActiveChatAction}
    from "actions/chatAction";

class ChatsListContainerClass extends React.Component {
    setActiveChat = (index) => {
        const {chats} = this.props
        const {setActiveChat} = this.props

        chats.forEach(chat => chat.isActive ? chat.isActive = false : '')
        chats[index].isActive = true

        setActiveChat(chats)
    }
    render() {
        const {chats} = this.props

        return (
            <ChatsList chats={chats} setActiveChat={this.setActiveChat} />
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setActiveChat: (chats) => dispatch(setActiveChatAction(chats))
    }
}

function mapStateToProps(state) {
    const {chats} = state.chat
    return {
        chats
    }
}

export const ChatsListContainer = connect(mapStateToProps, mapDispatchToProps)(ChatsListContainerClass)