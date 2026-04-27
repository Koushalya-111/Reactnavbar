import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div className="lg:px-80 lg:py-15 px-6 py-6">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>

            <div className="space-y-6 text-lg">
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-xl" />
                <span>+91 63613 02167</span>
              </div>

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-xl" />
                <span>gridusers@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-xl" />
                <span>Karnataka, India</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-6">Send Message</h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border px-4 py-2 rounded-lg focus:outline-none"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border px-4 py-2 rounded-lg focus:outline-none"
              />

              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full border px-4 py-2 rounded-lg focus:outline-none"
              ></textarea>

              <button
                type="submit"
                className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
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

export default Contact;
