import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const About = () => {
  return (
    <>
      <div className="lg:px-30 lg:py-25 py-20 px-2">
        <h1 className="lg:text-4xl text-2xl mt-5 font-bold text-center mb-6">
          About GridUsers
        </h1>

        <p className="text-lg text-gray-700  mb-6">
          GridUsers is a modern web application designed to display user
          profiles in a clean and organized grid layout. This platform allows
          users to explore different profiles, view personal details, and
          understand professional roles in a visually appealing way.
        </p>

        <p className="text-lg text-gray-700 mb-6">
          The main goal of GridUsers is to practice and demonstrate front-end
          development skills such as React components, JSON data handling,
          responsive layouts, and user interface design using Tailwind CSS.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Key Features</h2>

        <ul className="list-disc pl-6 text-lg text-gray-700 ">
          <li>Display multiple user profiles in a responsive grid layout</li>
          <li>Show user details like name, job, and profile image</li>
          <li>Interactive user cards with icons and buttons</li>
          <li>Clean and modern user interface design</li>
          <li>Responsive layout for mobile, tablet, and desktop screens</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>

        <p className="text-lg text-gray-700">
          Our mission is to create simple, user-friendly, and visually
          attractive applications that improve user experience while helping
          developers practice modern web development technologies.
        </p>
      </div>

      <footer className="bg-black text-white mt-10 lg:ml-30 lg:mr-30 rounded-2xl">
        <div className="px-6 py-8">
          <h1 className="text-2xl font-bold text-center">GridUsers</h1>

          <div className="flex justify-center gap-6 mt-4">
            <a href="#" className="hover:text-gray-400">
              Home
            </a>
            <a href="#" className="hover:text-gray-400">
              About
            </a>
            <a href="#" className="hover:text-gray-400">
              Contact
            </a>
          </div>

          <div className="flex justify-center gap-6 mt-4 text-xl">
            <FaFacebook className="cursor-pointer hover:text-blue-500" />
            <FaInstagram className="cursor-pointer hover:text-pink-500" />
            <FaTwitter className="cursor-pointer hover:text-blue-400" />
          </div>

          <p className="text-center mt-6 text-sm text-gray-400">
            @ 2026 GridUsers. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default About;
