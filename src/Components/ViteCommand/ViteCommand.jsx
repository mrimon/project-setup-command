import React from 'react';
import { TbBrandVite } from 'react-icons/tb';

const ViteCommand = () => {
    return (
        <div className='pt-20  px-10 text-[#8e44ad] bg-[#8e44ad20] rounded-3xl shadow-2xl mt-8 '>
            <div className='flex items-center justify-center gap-2'>
                <TbBrandVite size={40} />
                <span className='text-5xl text- text-center font-semibold'>Scaffolding Your First Vite Project.(Vite)</span>
            </div>
            <div className='text-gray-700 py-30 '>
                <h1 className=' text-2xl font-bold text-center mb-4'>Create React Project with Vite</h1>
                <div className='border rounded-2xl bg-gray-200 border-gray-400 p-2 w-full md:w-6/12 mx-auto'>
                    <p className='my-4 text-xl text-center'>Terminal</p>
                    <code className='border bg-gray-100 w-full  border-gray-400 shadow-sm rounded-2xl block p-3 text-xl text-[#c25ce7]'>
                        npm create vite@latest Your-project-react -- --template react</code>
                </div>
            </div>
        </div>
    );
};

export default ViteCommand;