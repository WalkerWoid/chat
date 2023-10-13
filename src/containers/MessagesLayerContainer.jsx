import React
    from "react";
import {connect}
    from "react-redux";

import {MessagesLayer}
    from "messages/MessagesLayer";

class MessagesLayerContainerClass extends React.Component {
    render() {
        return (
            <MessagesLayer chats={this.props.chats}/>
        )
    }
}

function mapStateToProps(state) {
    return {
        chats: state.chat.chats
    }
}

export const MessagesLayerContainer = connect(mapStateToProps)(MessagesLayerContainerClass)