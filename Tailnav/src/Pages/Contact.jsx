import React, { useState, useEffect, useContext } from 'react'
import { ThemeContext } from '../ThemeContext'

const Contact = () => {
    const {theme,handleTheme}=useContext(ThemeContext);
    return (
        <>

            <div className={`py-16 lg:px-26 px-3 ${theme==="dark" ? "bg-black" : "bg-white text-black" }`}>

                <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">
                    Contact Us
                </h1>

                <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">

                    <div className="w-full lg:w-1/2 max-sw-xl text-black bg-white shadow-lg rounded-xl p-8">

                        <form className="space-y-6">

                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            <textarea
                                placeholder="Your Message"
                                rows="4"
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2  focus:ring-blue-500"
                            ></textarea>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 cursor-pointer"
                            >
                                Send Message
                            </button>

                        </form>

                    </div>

                    <div className="w-full lg:w-1/2 h-[400px] shadow-2xl">

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15276.392822813908!2d75.72551870000001!3d16.8214835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1775999367050!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            className='rounded-2xl'
                        ></iframe>

                    </div>

                </div>

            </div>

        </>
    )
}

export default Contact