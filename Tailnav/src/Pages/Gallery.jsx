import React, { useState, useEffect, useContext } from 'react'
import { ThemeContext } from '../ThemeContext'
import Galleryy from '../Galleryy.json'
import '../App.css'

const Gallery = () => {
    const {theme,handleTheme}=useContext(ThemeContext);
    return (
        <>
            <div className={`w-full h-[120%] ${theme==="dark" ? "bg-black text-white" : "bg-white text-black" }` }>
                <p className='text-center font-bold text-blue-700 pt-4 text-xl'>OUR GALLERY</p>

                <h1 className='text-center font-bold mt-8 lg:text-6xl text-4xl mb-15'>Gallery of our cooked food.</h1>

                <ul className="lg:grid lg:grid-cols-3 gap-6 lg:px-26 px-5 py-3 md:grid md:grid-cols-2 md:px-5">
                    {Galleryy.map((item) => (
                        <div key={item.id} className='card mb-4'>

                            < img src={item.image} alt="" className='card-img' />


                            <div className='overlay'>

                                <h2 className="text-white text-xl font-bold">
                                    <span className='font-bold text-red-600'>Name</span>: {item.name}
                                </h2>

                                <p className="text-white text-lg">
                                    <span className='font-bold text-red-600'>Price</span>: ₹{item.price}
                                </p>

                                <button className='bg-orange-500 px-3 py-3 mt-4 rounded-xl cursor-pointer hover:bg-transparent hover:border-orange-500 hover:border-2 text-white hover:text-orange-500 text-xl'>Learn more</button>

                            </div>
                        </div>
                    ))}
                </ul>
            </div >
        </>
    )
}

export default Gallery