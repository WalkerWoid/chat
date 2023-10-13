import React
    from "react";
import {Outlet}
    from "react-router-dom";

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

export const Layer = () => {

    return (
        <Container>
            <HeaderContainer>
                <Menu />
            </HeaderContainer>
            <MainContainer>
                <Outlet />
            </MainContainer>
            <FooterContainer>Footer</FooterContainer>
        </Container>
    )
}