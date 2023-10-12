import styled
    from "styled-components";
import {mainColor, mainPadding, mainLength, mainBorderSize, mainBorderRadius}
    from "components/Layer";

const noActive = `
    padding: calc(${mainPadding}-2px);
    &:hover {
        color: ${mainColor};
        cursor: pointer;
        border-radius: ${mainBorderRadius};
    }
`
const active = `
    padding: ${mainPadding};
    background-color: ${mainColor};
    border-radius: ${mainBorderRadius};
    color: white;
`

export const StyleCss = {
    ChatUl: styled.ul``,
    ChatLi: styled.li`
        display: flex;
        justify-content: space-between;
        margin: ${mainLength} 0;
        &:last-of-type {
            margin-bottom: 0
        }
    `,
    ChatP: styled.p`
        cursor: pointer;
        flex: 1 1;
        width: 100%;
        padding: ${mainPadding};
        border-bottom: ${mainBorderSize} solid ${mainColor};
        ${props => props.$active === 'true' ? active : noActive}
    `,
    NoChats: styled.p`
        padding: ${mainPadding};
        margin-top: ${mainLength};
    `
}