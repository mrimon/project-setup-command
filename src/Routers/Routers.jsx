import React from 'react';
import { createBrowserRouter, Links } from 'react-router';
import Root from '../Layout/Root';
import Home from '../Components/Home/Home';
import LinkPage from '../Components/Links/LinkPage';
import ViteCommand from '../Components/ViteCommand/ViteCommand';
import RouterCommand from '../Components/RouterCommand/RouterCommand';
import TailwindCommand from '../Components/TailwindCommand/TailwindCommand';
import DaisyUiCommand from '../Components/DaisyUiCommand/DaisyUiCommand';
import ReactIcon from '../Components/ReactIcon/ReactIcon';
import Firebase from '../Components/Firebase/Firebase';
import Toastify from '../Components/Toastify/Toastify';

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                path: '/',
                Component: Home
            },
            {
                path: '/vite',
                Component: ViteCommand
            },
            {
                path: '/reactRouter',
                Component: RouterCommand
            },
            {
                path: '/tailwind',
                Component: TailwindCommand
            },
            {
                path: '/daisyUi',
                Component: DaisyUiCommand
            },
            {
                path: '/reactIcons',
                Component: ReactIcon
            },
            {
                path: '/firebase',
                Component: Firebase
            },
            {
                path: '/toastify',
                Component: Toastify
            }
        ]
    }
])

export default router;