import styled
    from "styled-components";

import {mainColor, mainPadding, mainLength, mainBorderSize, mainBorderRadius}
    from "components/Layer";

export const StyleCss = {
    MessagesContainer: styled.div`
        height: 100%;
        max-width: 100%;
        width: 100%;
        padding: ${mainPadding};
        
        border: ${mainBorderSize} solid ${mainColor};
        margin-left: ${mainLength};
        border-radius: ${mainBorderRadius};
        overflow-y: auto;
        
        display: flex;
        flex-direction: column;
    `,
    MessagesH2: styled.h2`
        font-size: 28px;
        background-color: ${mainColor};
        padding: ${mainPadding};
        border-radius: ${mainBorderRadius};
        color: white;
        text-align: center;
    `,
    ErrorChatP: styled.p`
        font-size: 20px;
        margin-top: ${mainLength}
    `
}