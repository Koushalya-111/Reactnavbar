import React from 'react'

const Contact = () => {
    return (
        <div className="py-16">

            <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">
                Contact Us
            </h1>

            <div className="max-w-xl mx-auto bg-white shadow-lg rounded-xl p-8">

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
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
                    >
                        Send Message
                    </button>

                </form>

            </div>

        </div>
    )
}

export default Contact