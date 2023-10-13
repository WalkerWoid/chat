import React from 'react';

import {createBrowserRouter}
    from "react-router-dom";
import {Layer}
    from "components/Layer";
import {ChatLayer}
    from "chat/ChatLayer";
import {MessagesLayerContainer}
    from "containers/MessagesLayerContainer";
import {ProfileLayerContainer}
    from "containers/ProfileLayerContainer";
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
                        element: <MessagesLayerContainer />
                    },

                ]
            },
            {
                path: '/profile',
                element: <ProfileLayerContainer />,
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