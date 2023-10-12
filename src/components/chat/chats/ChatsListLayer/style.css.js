import styled
    from "styled-components";

import {mainColor, mainPadding, mainBorderSize, mainBorderRadius}
    from "components/Layer";

export const styleCss = {
    ChatsContainer: styled.div`
        display: flex;
        flex-direction: column;
        max-width: 350px;
        width: 100%;
        
        border: ${mainBorderSize} solid ${mainColor};
        border-radius: ${mainBorderRadius};
        padding: ${mainPadding};
        overflow-y: auto;
    `,
    ChatsHeader: styled.h2`
        font-size: 28px;
        background-color: ${mainColor};
        padding: ${mainPadding};
        border-radius: ${mainBorderRadius};
        color: white;
        text-align: center;
    `,
}