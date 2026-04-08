import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineMenu } from "react-icons/md";

const Navbar = () => {

    const [hidden,setHidden]=useState(false)

    const handleHidden=()=>{
        setHidden(!hidden);
    }

    return (
        <nav className="bg-blue-600 shadow-lg px-3 py-3 ">

            <div className="max-w-6xl mx-auto w-full flex justify-evenly items-center flex-row ">

                <h1 className="text-white text-2xl font-bold">
                    MyWebsite
                </h1>

                <div className="space-x- w-full flex items-center justify-end space-x-2.5">
                    <Link
                        to="/"
                        className="text-white hover:text-yellow-300 font-medium  hidden lg:block">
                        Home
                    </Link>

                    <Link
                        to="/About"
                        className="text-white hover:text-yellow-300 font-medium  hidden lg:block">
                        About
                    </Link>

                    <Link
                        to="/Services"
                        className="text-white hover:text-yellow-300 font-medium  hidden lg:block">
                        Services
                    </Link>

                    <Link
                        to="/Contact"
                        className="text-white hover:text-yellow-300 font-medium hidden lg:block">
                        Contact
                    </Link>
                </div>
                <MdOutlineMenu className='text-white text-4xl  lg:hidden block ' onClick={handleHidden} />
            </div>

            {/* for mibile menu */}
            
            <div className={`space-x- w-full flex flex-col items-center justify-center space-y-2.5 px-5  lg:hidden ${hidden ? "hidden" :"block"}`} >
                    <Link
                        to="/"
                        className="text-white hover:text-yellow-300 font-medium  lg:block">
                        Home    
                    </Link>

                    <Link
                        to="/About"
                        className="text-white hover:text-yellow-300 font-medium  lg:block">
                        About
                    </Link>

                    <Link
                        to="/Services"
                        className="text-white hover:text-yellow-300 font-medium lg:block">
                        Services
                    </Link>

                    <Link
                        to="/Contact"
                        className="text-white hover:text-yellow-300 font-medium lg:block">
                        Contact
                    </Link>

                    <button className='border border-white bg-white rounded-lg font-semibold hidden  lg:block'>Click</button>
                    
                </div>

        </nav>
    )
}

export default Navbar