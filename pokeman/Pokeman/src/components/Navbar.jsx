import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [fixed, setFixed] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY > 50) {
                setFixed(true);
            } else {
                setFixed(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);

    return (
        <nav
            className={`w-full px-10 py-7 bg-blue-500 z-50 transition-all duration-300
            ${fixed ? "fixed top-0 left-0 shadow-2xl" : ""}`}
        >

            <div className="max-w-6xl mx-auto w-full flex justify-between items-center">

                <h1 className="text-white lg:text-2xl text-lg font-bold">
                    POKEMON
                </h1>

                <div className="flex items-center justify-end space-x-2.5">

                    <Link
                        to="/"
                        className="text-black hover:text-yellow-300 font-bold text-xl"
                    >
                        Home
                    </Link>

                </div>

            </div>

        </nav>
    )
}

export default Navbar