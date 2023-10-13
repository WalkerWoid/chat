import React
    from "react";
import {connect}
    from "react-redux";
import {ChatCreate}
    from "chats/ChatCreate";
import {chatCreateAction}
    from "actions/chatAction";

class ChatCreateContainerClass extends React.Component {
    getNewChatId = () => {
        const {chats} = this.props

        let id = 0
        for (let i = 0; i < chats.length; i++) {
            if (chats.find(chat => chat.id === id))
                id+=1
        }

        return id
    }
    chatCreate = (chatTitle) => {
        const {chatCreate} = this.props
        const newId = this.getNewChatId()
        if (chatTitle.length === 0)
            chatTitle = 'Новый чат'

        chatCreate({id: newId, title: chatTitle, messages: [], isActive: false})
    }
    render() {
        return (
            <ChatCreate chatCreate={this.chatCreate} />
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        chatCreate: (newChat) => dispatch(chatCreateAction(newChat))
    }
}

function mapStateToProps(state) {
    return {
        chats: state.chat.chats
    }
}

export const ChatCreateContainer = connect(mapStateToProps, mapDispatchToProps)(ChatCreateContainerClass)