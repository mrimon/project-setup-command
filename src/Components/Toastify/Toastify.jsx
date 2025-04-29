import React from 'react';
import { FaReact } from 'react-icons/fa';

const Toastify = () => {
    return (
        <div className='pt-20  px-10 text-[#5758BB] bg-[#B5347120] rounded-3xl shadow-2xl mt-8 '>
            <div className='flex items-center justify-center gap-2'>
                <FaReact size={40} />
                <span className='text-5xl text- text-center font-semibold'>Toastify Command to Install.</span>
            </div>
            <div className='text-gray-700 py-30 '>
                <h1 className=' text-2xl font-bold text-center mb-4'>Install Toastify</h1>
                <div className='border rounded-2xl bg-gray-200 border-gray-400 p-2 w-full md:w-6/12 mx-auto'>
                    <p className='my-4 text-xl text-center'>Terminal</p>
                    <code className='border bg-gray-100 w-full  border-gray-400 shadow-sm rounded-2xl block p-3 text-xl  text-[#5758BB]'>npm i react-toastify</code>
                </div>
            </div>
        </div>
    );
};

export default Toastify;