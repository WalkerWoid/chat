import styled
    from "styled-components";

import {mainColor, mainPadding, mainLength, mainBorderSize, mainBorderRadius}
    from "components/Layer/style.css";

export const StyleCss = {
    MenuUl: styled.ul`
        display: flex;
        list-style-type: none;
        & .active {
            background-color: ${mainColor};
        }
    `,
    MenuLi: styled.li`
        margin-right: ${mainLength};
        &:last-of-type {
            margin-right: 0;
        }
        & a {
            display: inline-block;
            padding: ${mainPadding};
            text-decoration: none;
            color: ${mainColor};
            border-bottom: ${mainBorderSize} solid ${mainColor};
            &:hover {
                background-color: ${mainColor};
                border-radius: ${mainBorderRadius};
                color: white;
            }
        }
    `
}