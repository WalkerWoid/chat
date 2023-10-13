import React
    from "react";
import {nanoid}
    from "nanoid";
import {connect}
    from "react-redux";
import {SendMessage}
    from "messages/SendMessage";

import {sendMessageAction}
    from "actions/chatAction";
class SendMessageContainerClass extends React.Component {
    sendMessage = (message) => {
        const {sendMessage, author} = this.props
        const {id} = this.props
        if (message) {
            sendMessage({
                message: {id: nanoid(), message, author},
                id: id
            })
        }
    }
    render() {
        return (
            <SendMessage sendMessage={this.sendMessage} />
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        sendMessage: (message) => dispatch(sendMessageAction(message))
    }
}

function mapStateToProps(state) {
    return {
        chats: state.chat.chats,
        author: state.profile.name.value
    }
}


export const SendMessageContainer = connect(mapStateToProps, mapDispatchToProps)(SendMessageContainerClass)