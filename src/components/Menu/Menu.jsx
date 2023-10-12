import React
    from "react";
import {Link}
    from "react-router-dom";

import {StyleCss}
    from './style.css'

const {
    MenuUl,
    MenuLi
} = StyleCss

const menu = [
    {
        title: 'Чат',
        link: '/chat'
    },
    {
        title: 'Профиль',
        link: '/profile'
    },
    {
        title: 'Игра',
        link: '/game'
    },
]

export const Menu = () => {
    return (
        <MenuUl>
            {
                menu.map((li, index) => {
                    return (
                        <MenuLi key={index}>
                            <Link to={li.link}>{li.title}</Link>
                        </MenuLi>
                    )
                })
            }
        </MenuUl>
    )
}

/** todo - стили не подключаются к стилям этого компонента
 *
 * */