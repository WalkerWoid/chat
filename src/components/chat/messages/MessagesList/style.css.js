import styled
    from "styled-components";

import {mainColor, mainPadding, mainLength, mainBorderRadius}
    from "components/Layer";

export const StyleCss = {
    MessagesUl: styled.ul`
        margin-top: ${mainLength};
        list-style-type: none;
        flex: 1 1 auto;
        overflow-y: auto;
    `,
    MessagesLi: styled.li`
        display: flex;
        align-items: center;
        margin-top: ${mainLength};
    `,
    MessagesP: styled.p`
        padding: ${mainPadding};
        background-color: ${mainColor};
        border-radius: ${mainBorderRadius};
        color: white;
    `,
    MessagesSpan: styled.span`
        margin-right: ${mainLength};
        background-color: ${mainColor};
        padding: ${mainPadding};
        width: ${props => props.width}px;
        border-radius: 50%;
        color: white;
        
        display: flex;
        justify-content: center;
        align-items: center;
    `,
    NoMessagesP: styled.p`
        padding: ${mainPadding};
    `
}