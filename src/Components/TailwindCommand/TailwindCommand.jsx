import React from 'react';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiReactrouter } from 'react-icons/si';

const TailwindCommand = () => {
    return (
        <div className='pt-20  px-10  text-blue-400 bg-blue-100 rounded-3xl shadow-2xl mt-8 '>
            <div className='flex items-center justify-center gap-2'>
                <RiTailwindCssFill size={40} />
                <span className='text-5xl text- text-center font-semibold'>Tailwind CSS Commands to Install.</span>
            </div>
            <div className='text-gray-700 py-30 '>
                <h1 className=' text-2xl font-bold text-center mb-4'>Install Tailwind CSS</h1>
                <div className='border rounded-2xl bg-gray-200 border-gray-400 p-2 w-full md:w-6/12 mx-auto'>
                    <p className='my-4 text-xl text-center'>Terminal</p>
                    <code className='border bg-gray-100 w-full  border-gray-400 shadow-sm rounded-2xl block p-3 text-xl  text-[#5c9de7]'>npm install tailwindcss @tailwindcss/vite</code>
                </div>

                <div className='my-8 border rounded-2xl bg-gray-200 border-gray-400 p-2 w-full md:w-6/12 mx-auto'>
                    <p className='my-4 text-xl text-center'>vite.config.ts</p>
                    <code className='border bg-gray-100 w-full break-words  border-gray-400 shadow-sm rounded-2xl block p-3 text-xl  text-[#5c9de7]'>
                        <span className=''>import tailwindcss from '@tailwindcss/vite'</span> <br />
                        <pre><code>
                            {`export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})`}
                        </code></pre>
                    </code>
                </div>
                <div className='border rounded-2xl bg-gray-200 border-gray-400 p-2 w-full md:w-6/12 mx-auto'>
                    <p className='my-4 text-xl text-center'>Css</p>
                    <code className='border bg-gray-100 w-full  border-gray-400 shadow-sm rounded-2xl block p-3 text-xl  text-[#5c9de7]'>@import "tailwindcss";
                    </code>
                </div>
            </div>
        </div>
    );
};

export default TailwindCommand;