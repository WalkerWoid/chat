import styled
    from "styled-components";
import {mainColor, mainPadding, mainLength}
    from "components/Layer";

export const StyleCss = {
    ChatDeleteSpan: styled.span`
        width: ${props => props.width}px;
        cursor: pointer;
        background-color: ${mainColor};
        padding: ${mainPadding};
        margin-left: ${mainLength};
        border-radius: 50%;
        color: white;
        box-sizing: border-box;
        
        display: flex;
        justify-content: center;
        align-items: center;
    `,
}