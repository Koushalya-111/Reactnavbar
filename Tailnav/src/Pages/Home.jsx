import React from 'react'

const Home = () => {
    return (
        <div className="text-center py-20">

            <h1 className="text-5xl font-bold text-blue-600 mb-6">
                Welcome to My Website
            </h1>

            <p className="text-lg text-gray-600 max-w-xl mx-auto">
                This is the Home page of our React website built using
                React Router and Tailwind CSS.
            </p>

            <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Get Started
            </button>

        </div>
    )
}

export default Home