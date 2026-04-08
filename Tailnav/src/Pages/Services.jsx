import React from 'react'

const Services = () => {
    return (
        <div className="py-16">

            <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">
                Our Services
            </h1>

            <div className="grid md:grid-cols-3 gap-8">

                <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl">
                    <h2 className="text-xl font-bold mb-3">
                        Web Development
                    </h2>
                    <p className="text-gray-600">
                        We build responsive websites using modern technologies.
                    </p>
                </div>

                <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl">
                    <h2 className="text-xl font-bold mb-3">
                        UI Design
                    </h2>
                    <p className="text-gray-600">
                        Beautiful and user-friendly interface design services.
                    </p>
                </div>

                <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl">
                    <h2 className="text-xl font-bold mb-3">
                        Support
                    </h2>
                    <p className="text-gray-600">
                        We provide support and maintenance services.
                    </p>
                </div>

            </div>

        </div>
    )
}

export default Services