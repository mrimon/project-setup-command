import React from 'react';
import { GiDaisy } from 'react-icons/gi';
import { SiReactrouter } from 'react-icons/si';

const DaisyUiCommand = () => {
    return (
        <div className='pt-20  px-10 text-green-400 bg-green-50 rounded-3xl shadow-2xl mt-8 '>
            <div className='flex items-center justify-center gap-2'>
                <GiDaisy size={40} />
                <span className='text-5xl text- text-center font-semibold'>DaisyUI Commands to Install.</span>
            </div>
            <div className='text-gray-700 py-30 '>
                <h1 className=' text-2xl font-bold text-center mb-4'>Install DaisyUI</h1>
                <div className='border rounded-2xl bg-[#ecf0f1] border-gray-400 p-2 w-full md:w-6/12 mx-auto'>
                    <p className='my-4 text-xl text-center'>Terminal</p>
                    <code className='border bg-gray-100 w-full   border-gray-400 shadow-sm rounded-2xl block p-3 text-xl text-green-400'>npm i -D daisyui@latest</code>
                </div>


                <div className='mt-8 border rounded-2xl bg-[#ecf0f1] border-gray-400 p-2 w-full md:w-6/12 mx-auto'>
                    <p className='my-4 text-xl text-center'>Css</p>
                    <code className='border bg-gray-100 w-full   border-gray-400 shadow-sm rounded-2xl block p-3 text-xl text-green-400'>
                        <span className='text-gray-400'>@import "tailwindcss";</span> <br />
                        <span>@plugin "daisyui";</span>
                    </code>
                </div>
            </div>
        </div>
    );
};

export default DaisyUiCommand;