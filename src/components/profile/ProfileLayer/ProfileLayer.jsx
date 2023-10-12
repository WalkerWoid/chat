import React, {useContext, useCallback}
    from "react";
import {MainContext}
    from "components/Layer";
import {ProfileLine}
    from "profile/ProfileLine";

import {StyleCss}
    from './style.css'
const {
    ProfileContainer,
    ProfileH2,
} = StyleCss

export const ProfileLayer = () => {
    const {profile} = useContext(MainContext).state
    const {dispatch} = useContext(MainContext)

    const changeMeaning = useCallback((newValue, engText) => {
        dispatch(
                {
                    type: 'CHANGE_PROFILE',
                    payload: {
                        engText,
                        newValue
                    }
                }
            )
    }, [profile])

    return (
        <ProfileContainer>
            <ProfileH2>Профиль</ProfileH2>

            <ProfileLine info={profile.name} changeMeaning={changeMeaning} />
            <ProfileLine info={profile.age} changeMeaning={changeMeaning} />
            <ProfileLine info={profile.gender} changeMeaning={changeMeaning} />
        </ProfileContainer>
    )
}

/** todo - сделать ли тут компонент высшего порядка? */

