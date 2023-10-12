import {nanoid} from 'nanoid';

export let initialState = {
    chats: [
        {
            id: 0,
            title: 'Чат1',
            messages: [
                {
                    id: nanoid(),
                    message: 'Сообщение 1 в чате 1',
                    author: 'Walker'
                },
                {
                    id: nanoid(),
                    message: 'Сообщение 2 в чате 1',
                    author: 'Walker'
                }
            ],
            isActive: false
        },
        {
            id: 7,
            title: 'Чат2',
            messages: [
                {
                    id: nanoid(),
                    message: 'Сообщение 1 в чате 2',
                    author: 'Walker'
                },
                {
                    id: nanoid(),
                    message: 'Сообщение 2 в чате 2',
                    author: 'Walker'
                }
            ],
            isActive: false
        },
        {
            id: 2,
            title: 'Чат3',
            messages: [
                {
                    id: nanoid(),
                    message: 'Сообщение 1 в чате 3',
                    author: 'Walker'
                },
                {
                    id: nanoid(),
                    message: 'Сообщение 2 в чате 3',
                    author: 'Walker'
                }
            ],
            isActive: false
        },
        {
            id: 10,
            title: 'Чат4',
            messages: [
                {
                    id: nanoid(),
                    message: 'Сообщение 1 в чате 4',
                    author: 'Walker'
                },
                {
                    id: nanoid(),
                    message: 'Сообщение 2 в чате 4',
                    author: 'Walker'
                }
            ],
            isActive: false
        },
    ],
    profile: {
        name: {
            text: 'Имя',
            engText: 'name',
            value: 'WalkerWoid'
        },
        age: {
            text: 'Возраст',
            engText: 'age',
            value: '20'
        },
        gender: {
            text: 'Пол',
            engText: 'gender',
            value: 'Мужской'
        }
    }
}