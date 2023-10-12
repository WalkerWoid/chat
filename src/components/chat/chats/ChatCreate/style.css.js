import styled
    from "styled-components";
import {mainColor, mainPadding, mainLength, mainBorderSize, mainBorderRadius}
    from "components/Layer";

export const StyleCss = {
    ChatCreateContainer: styled.div`
        display: flex;
        margin-top: ${mainLength};
        align-items: center;
    `,
    ChatCreateInput: styled.input`
        padding: ${mainPadding};
        border: ${mainBorderSize} solid ${mainColor};
        border-radius: ${mainBorderRadius};
        color: #161a1e;
        &::placeholder {
            color: #161a1e;
        }
    `,
    ChatCreateButton: styled.button`
        background-color: ${mainColor};
        width: 44px;
        height: 44px;
        padding: ${mainPadding};
        border: none;
        margin-right: ${mainLength};
        border-radius: 50%;
        font-size: 28px;
        line-height: 28px;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover {
            cursor: pointer;
        }
    `,
}