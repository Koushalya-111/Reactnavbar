import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { SlArrowRight } from "react-icons/sl";
import data from '../Aboutus.json';
import { FaStar } from "react-icons/fa";
import { ThemeContext } from '../ThemeContext'

const About = () => {
    const { theme, handleTheme } = useContext(ThemeContext);
    return (
        <>
            <div className={`text-center w-full  pt-5 mb-8 ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>
                <p className='lg:text-2xl text-xl text-center  text-blue-700'>FEATURES</p>

                <h1 className='text-3xl lg:text-6xl text-center font-semibold mt-3 '>Get a many of interesting <br /> features.</h1>

                <ul className='lg:flex items-center justify-evenly flex-wrap md:grid grid-cols-2 md:gap-2 mt-10 lg:px-20 px-5'>
                    {
                        data.map((item, id) => (
                            <li className={"card_bod lg:w-[30%] sm:w-[100%] border border-gray-300 hover:shadow-2xl cursor-pointer transition-all duration-300 px-2 mb-5 rounded-lg"} key={id}>
                                <img src={item.image} className='w-[100%] h-[280px] my-2 mx-auto rounded-lg ' alt="" />
                                <div className='leading-6 mt-4'>
                                    <h1 className='font-bold text-2xl'>{item.title}</h1>
                                    <h2>{item.description}</h2>
                                </div>
                                <div className="review text-xl flex items-center justify-center gap-6 ">
                                    <div className='flex items-center'>
                                        <FaStar className='about_icon' />
                                        <FaStar className='about_icon' />
                                        <FaStar className='about_icon' />
                                        <FaStar className='about_icon' />
                                    </div>
                                    <p>4/5</p>
                                </div>
                            </li>
                        ))
                    }
                </ul>

            </div>
        </>
    )
}

export default About