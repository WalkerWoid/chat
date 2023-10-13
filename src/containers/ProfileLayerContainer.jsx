import React
    from "react";
import {connect}
    from "react-redux";
import {ProfileLayer}
    from "profile/ProfileLayer";
import {profileUpdateAction}
    from "actions/profileAction";

class ProfileLayerContainerClass extends React.Component {
    updateProfile = (newValue, engFieldName) => {
        const {profileUpdate} = this.props
        console.log('Новое значение поля:', newValue)
        console.log('Английское значение поля:', engFieldName)
        profileUpdate({newValue, engFieldName})
    }
    render() {
        return (
            <ProfileLayer profile={this.props.profile} updateProfile={this.updateProfile} />
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        profileUpdate: (newValue) => dispatch(profileUpdateAction(newValue))
    }
}

function mapStateToProps(state) {
    console.log(state.profile)
    return {
        profile: state.profile
    }
}

export const ProfileLayerContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileLayerContainerClass)