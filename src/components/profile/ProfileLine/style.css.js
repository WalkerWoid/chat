import styled
    from "styled-components";
import {mainBorderRadius, mainBorderSize, mainColor, mainLength, mainPadding} from "components/Layer";

export const StyleCss = {
    ProfileRow: styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 20px;
        margin-top: ${mainLength};
    `,
    ProfileUnit: styled.div`
        display: flex;
        border-bottom: ${mainBorderSize} solid ${mainColor};
        &:last-of-type {
            border: none;
        }
    `,
    ProfileSpan: styled.span`
        display: inline-block;
        margin-right: ${mainLength};
        &:last-of-type {
            margin: 0;
        }
    `,
    ProfileInput: styled.input`
        padding: ${mainPadding};
        border: ${mainBorderSize} solid ${mainColor};
        color: #161a1e;
        border-radius: ${mainBorderRadius};
        margin-right: ${mainLength};
        &::placeholder {
            color: #161a1e;
        }
    `,
    ProfileButton: styled.button`
        padding: ${mainPadding};
        border: ${mainBorderSize} solid ${mainColor};
        background-color: ${mainColor};
        color: white;
        border-radius: ${mainBorderRadius};
        cursor: pointer;
        max-width: 100px;
        width: 100%;
    `
}