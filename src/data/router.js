import React from 'react';

import {createBrowserRouter}
    from "react-router-dom";
import {Layer}
    from "components/Layer";
import {ChatLayer}
    from "chat/ChatLayer";
import {MessagesLayer}
    from "messages/MessagesLayer";
import {ProfileLayer}
    from "profile/ProfileLayer";
import {GameLayer}
    from "game/GameLayer";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layer />,
        children: [
            {
                path: '/',
                element: <ChatLayer />
            },
            {
                path: '/chat',
                element: <ChatLayer />,
                children: [
                    {
                        path: '/chat/:id',
                        element: <MessagesLayer />
                    },

                ]
            },
            {
                path: '/profile',
                element: <ProfileLayer />,
            },
            {
                path: '/game',
                element: <GameLayer />,
            },
            {
                path: '*',
                element: <p>ничего не найдено</p>
            },
        ]
    },
    {
        path: '*',
        element: <Layer />
    }
])