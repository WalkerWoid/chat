import React
    from "react";
import {connect}
    from "react-redux";
import {MessagesList}
    from "messages/MessagesList";

class MessagesListContainerClass extends React.Component {
    render() {
        return (
            <MessagesList chats={this.props.chats} id={this.props.id}/>
        )
    }
}

function mapStateToProps(state) {
    return {
        chats: state.chat.chats
    }
}

export const MessagesListContainer = connect(mapStateToProps)(MessagesListContainerClass)