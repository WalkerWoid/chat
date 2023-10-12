import React, {createContext, useReducer}
    from "react";
import {Outlet}
    from "react-router-dom";
import {Reducer}
    from "reducer/reducer";

import {Menu}
    from "components/Menu";

import {styleCss}
    from "./style.css";

const {
    Container,
    HeaderContainer,
    MainContainer,
    FooterContainer
} = styleCss

import {initialState}
    from "data/state";

export const MainContext = createContext()

export const Layer = () => {
    const [state, dispatch] = useReducer(Reducer, initialState)
    const stateObj = {
        state,
        dispatch
    }

    return (
        <MainContext.Provider value={stateObj}>
            <Container>
                <HeaderContainer>
                    <Menu />
                </HeaderContainer>
                <MainContainer>
                    <Outlet />
                </MainContainer>
                <FooterContainer>Footer</FooterContainer>
            </Container>
        </MainContext.Provider>
    )
}