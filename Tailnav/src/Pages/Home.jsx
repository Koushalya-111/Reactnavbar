import React, { useState, useEffect, useContext } from 'react'
import { ThemeContext } from '../ThemeContext'


const Home = () => {
    const {theme,handleTheme}=useContext(ThemeContext);
    
    return (
        <>
            <div className={`text-center lg:h-screen h-auto w-full lg:flex justify-center items-center lg:gap-16 ${theme==="dark" ? "bg-black text-white" : "bg-white text-black" }`}>
                <div className='py-5'>
                    <h1 className='font-bold  lg:text-7xl text-blue-700 text-3xl '>Cook anything</h1>
                    <h1 className='font-bold  lg:text-7xl text-blue-700 text-3xl'> with the experts</h1>
                    <p className='text-gray-500 mt-4 lg:text-lg'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem <br />
                        accusantium doloremque laudantium, totam</p>
                    <div className='mt-4 flex justify-center items-center gap-6'>
                        <div className='lg:flex lg:flex-row lg:w-3/4'>
                            <button className='w-2/4 p-3 my-2 mx-2 bg-blue-700 text-white rounded-xl text-xl font-bold lg:cursor-pointer lg:hover:bg-transparent lg:hover:text-blue-700 lg:hover:border-2 hover:bg-transparent hover:text-blue-700 hover:border-2 '>Lets cook</button>
                            <button className='w-2/4 p-3 bg-blue-700 mx-2 my-2 text-white rounded-xl text-xl font-bold cursor-pointer hover:bg-transparent hover:text-blue-700 hover:border-2'>Explore Now</button>
                        </div>
                    </div>
                </div>

                <div className=' w-full lg:w-[40%]'>
                    <img src="./banner-image.png" alt="" />
                </div>

            </div>
        </>
    )
}

export default Home