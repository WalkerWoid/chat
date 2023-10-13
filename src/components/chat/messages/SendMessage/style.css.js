import styled
    from "styled-components";
import {mainColor, mainPadding, mainLength, mainBorderSize, mainBorderRadius}
    from "components/Layer";

export const StyleCss = {
    SendContainer: styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between; 
        margin-top: ${mainLength};
    `,
    SendInput: styled.input`
        padding: ${mainPadding};
        max-width: 100%;
        width: 100%;
        border: ${mainBorderSize} solid ${mainColor};
        border-radius: ${mainBorderRadius};
        color: #161a1e;
        &::placeholder {
            color: #161a1e;
        }
    `,
    SendButton: styled.button`
        padding: ${mainPadding};
        margin-left: ${mainLength};
        background-color: ${mainColor};
        border: none;
        color: white;
        border: ${mainBorderSize} solid ${mainColor};
        cursor: pointer;
        border-radius: ${mainBorderRadius}
    `

}