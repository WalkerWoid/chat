import React
    from "react";
import {ProfileLine}
    from "profile/ProfileLine";

import {StyleCss}
    from './style.css'
const {
    ProfileContainer,
    ProfileH2,
} = StyleCss

export const ProfileLayer = ({profile, updateProfile}) => {
    return (
        <ProfileContainer>
            <ProfileH2>Профиль</ProfileH2>

            <ProfileLine info={profile.name} updateProfile={updateProfile} />
            <ProfileLine info={profile.age} updateProfile={updateProfile} />
            <ProfileLine info={profile.gender} updateProfile={updateProfile} />
        </ProfileContainer>
    )
}

/** todo - сделать ли тут компонент высшего порядка? */

