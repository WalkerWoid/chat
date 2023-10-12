import React, {useState}
    from "react";

import {StyleCss}
    from './style.css'

const {
    ProfileRow,
    ProfileUnit,
    ProfileSpan,
    ProfileInput,
    ProfileButton
} = StyleCss

export const ProfileLine = ({info, changeMeaning}) => {
    const {text, engText, value} = info
    const [newValue, setNewValue] = useState(value)

    const changeValueHandler = (event) => {
        setNewValue(event.target.value)
    }

    return (
        <>
            <ProfileRow>
                <ProfileUnit>
                    <ProfileSpan>{text}:</ProfileSpan>
                    <ProfileSpan>{value}</ProfileSpan>
                </ProfileUnit>

                <ProfileUnit>
                    <ProfileInput
                        type={'text'}
                        placeholder={`Введите ${text.toLowerCase()}`}
                        onChange={changeValueHandler}
                        value={newValue} />
                    <ProfileButton
                        type={'button'}
                        onClick={() => changeMeaning(newValue, engText)}>Изменить</ProfileButton>
                </ProfileUnit>
            </ProfileRow>
        </>
    )
}