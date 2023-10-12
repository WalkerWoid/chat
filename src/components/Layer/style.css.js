import styled from 'styled-components'

export const mainColor = '#ff9966'
export const mainPadding = '10px'
export const mainLength = '10px'
export const mainBorderRadius = '5px'
export const mainBorderSize = '2px'

export const styleCss = {
    Container: styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
        height: 100vh;
        max-width: 1280px;
        width: 100%;
        margin: 0 auto;
    `,
    HeaderContainer: styled.header`
        border-bottom: ${mainBorderSize} solid ${mainColor};
        border-right: ${mainBorderSize} solid ${mainColor};
        border-left: ${mainBorderSize} solid ${mainColor};
        border-bottom-left-radius: ${mainBorderRadius};
        border-bottom-right-radius: ${mainBorderRadius};
        padding: ${mainPadding};
    `,
    MainContainer: styled.main`
        flex: 1 1 auto;
        border-right: ${mainBorderSize} solid ${mainColor};
        border-left: ${mainBorderSize} solid ${mainColor};
        border-radius: ${mainBorderRadius};
        padding: ${mainPadding};
        overflow-y: auto;
                
        display: flex;
    `,
    FooterContainer: styled.footer`
        border-top: ${mainBorderSize} solid ${mainColor};
        border-right: ${mainBorderSize} solid ${mainColor};
        border-left: ${mainBorderSize} solid ${mainColor};
        border-top-left-radius: ${mainBorderRadius};
        border-top-right-radius: ${mainBorderRadius};
        padding: ${mainPadding};
    `
}

/**
 * todo кастомизировать скроллы и минимизировать стили с бордерами
 * */