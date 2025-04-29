import React from 'react';
const bgReact = 'https://i.ibb.co.com/q30QtknX/react-icon-256x256-2yyldh38.png'

const Hero = () => {
    return (
        <div className=' rounded-3xl shadow-2xl my-2 py-10'>
            <div className=' rounded-2xl px-20   text-teal-300 grid  md:grid-cols-2 md:gap-10 justify-between items-center'>
                <div className=''>
                    <h1 className='text-3xl md:text-6xl font-bold text-center  md:leading-15'>Are You Tired Of Opening new tabs on Browser ?</h1>
                </div>
                <div>
                    <img className='w-[500px]' src={bgReact} alt="" />
                </div>
            </div>
            <div className='w-3xl mx-auto px-4'>
                <p className='text-xl italic text-gray-700 font-bold text-center'>Here we Collected all resources command to install in React project. No more need to search and go to all the resources website (Vite,React-Router, Tailwind, DaisyUI, Firebase etc) separately.</p>
            </div>
        </div>
    );
};

export default Hero;