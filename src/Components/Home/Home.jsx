import React from 'react';
import Hero from '../Hero/Hero';
import RouterCommand from '../RouterCommand/RouterCommand';
import ViteCommand from '../ViteCommand/ViteCommand';
import TailwindCommand from '../TailwindCommand/TailwindCommand';
import DaisyUiCommand from '../DaisyUiCommand/DaisyUiCommand';
import ReactIcon from '../ReactIcon/ReactIcon';
import Firebase from '../Firebase/Firebase';
import Toastify from '../Toastify/Toastify';




const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <ViteCommand></ViteCommand>
            <RouterCommand></RouterCommand>
            <TailwindCommand></TailwindCommand>
            <DaisyUiCommand></DaisyUiCommand>
            <ReactIcon></ReactIcon>
            <Firebase></Firebase>
            <Toastify></Toastify>
        </div>
    );
};

export default Home;