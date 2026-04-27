import React, { useState, useEffect, useContext } from 'react'
import { ThemeContext } from '../ThemeContext'

const Services = () => {
    const { theme, handleTheme } = useContext(ThemeContext);
    return (
        <>
            <div className={`w-full h-full lg:h-[90vh] pt-7 lg:flex justify-center items-center ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>

                <div className='lg:w-[50%] w-[100%] h-[100%] flex items-center justify-center'>
                    <img src="./coock1.png" alt="" className='h-[80%] rounded-2xl flex justify-center bg-amber-50' />
                </div>

                <div className='lg:w-[35%] w-[100%] mt-5'>
                    <p className='text-2xl text-blue-700 font-bold uppercase'>cook with us</p>

                    <h1 className='lg:text-5xl text-3xl mt-5 mb-5'>Cooking together with <br /> the expert.</h1>

                    <p className='font-bold lg:text-xl text-lg text-gray-500 mb-10'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem</p>


                    <p className='font-bold lg:text-xl text-lg text-gray-500'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium....</p>

                    <button className='w-2/4 p-3 bg-blue-700 mx-2 my-2 text-white rounded-xl text-xl font-bold cursor-pointer hover:bg-transparent hover:text-blue-700 hover:border-2 mt-6'>Learn more</button>
                </div>
            </div>
        </>
    )
}

export default Services