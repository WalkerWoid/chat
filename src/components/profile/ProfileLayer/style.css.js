import styled
    from "styled-components";
import {mainPadding, mainColor, mainBorderRadius}
    from "components/Layer";

export const StyleCss = {
    ProfileContainer: styled.div`
        display: flex;
        flex-direction: column;
        flex: 1 1 auto;
    `,
    ProfileH2: styled.h2`
        font-size: 28px;
        background-color: ${mainColor};
        text-align: center;
        letter-spacing: .5;
        padding: ${mainPadding};
        border-radius: ${mainBorderRadius};
        color: white;
        flex: 0 1 auto;
    `,
}
