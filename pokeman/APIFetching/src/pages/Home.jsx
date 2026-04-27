import React from "react";
import users from "../users.json";
import { FaStar } from "react-icons/fa6";
import { PiUsersThreeFill } from "react-icons/pi";
import { FaToolbox } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { useState } from "react";

const Home = () => {
  const [inputValue, setInputvalue] = useState("");
  const [currentPage, setCurrentpage] = useState(1);
  console.log(inputValue);

  const filterdData = users.filter((user) =>
    user.first_name.toLowerCase().includes(inputValue.toLowerCase()),
  );

  const errors = filterdData.length === 0;

  const itemsPerpage = 8;

  const lastIndex = currentPage * itemsPerpage;
  const firstIndex = lastIndex - itemsPerpage;

  const totalPages = Math.ceil(filterdData.length / itemsPerpage);

  const newUsers = filterdData.slice(firstIndex, lastIndex);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentpage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentpage(currentPage - 1);
    }
  };

  return (
    <>
      <div className="w-full h-auto p-6 lg:py-30 py-30 lg:px-25">
        <div className="flex items-center justify-between gap-4 lg:mx-5">
          <h1 className="font-bold lg:text-3xl text-xl text-center">USERS</h1>
          <input
            type="text"
            className="border rounded-md px-2 py-1.5 md:w-1/3 lg:w-1/4"
            placeholder="Search "
            onChange={(e) => {
              setInputvalue(e.target.value);
              setCurrentpage(1);
            }}
          />
        </div>

        <ul className="lg:grid lg:grid-cols-4 md:grid md:grid-cols-3 gap-6 mt-10">
          {errors && (
            <p className="text-red-500 absolute text-xl lg:text-2xl py-5 md:top-45 top-38 lg:top-40 left-0 w-full  font-semibold text-center">
              No users found
            </p>
          )}

          {newUsers.map((item, id) => {
            return (
              <div
                key={id}
                className="shadow-2xl w-[100%] h-auto rounded-2xl pb-4 bg-white mb-6"
              >
                <div className="h-[20vh]">
                  <img
                    src="/nature2.jpg"
                    alt=""
                    className="h-full w-full shadow-lg rounded-2xl"
                  />
                </div>

                <div className="w-full flex justify-center items-center h-[5vh]">
                  <img
                    src={item.image}
                    alt=""
                    className="rounded-full h-[16vh] border-4 border-white shadow-2xl"
                  />
                </div>

                <div className="text-center mt-12">
                  <h1 className="font-bold text-lg">
                    {item.first_name} {item.last_name}
                  </h1>
                  <p>{item.job}</p>
                </div>

                <div className="flex justify-around items-center mt-4 text-lg text-blue-950">
                  <div className="text-center">
                    <FaStar />
                    <h1>2k</h1>
                  </div>

                  <div className="text-center">
                    <PiUsersThreeFill />
                    <h1>10k</h1>
                  </div>

                  <div className="text-center">
                    <FaToolbox />
                    <h1>20</h1>
                  </div>
                </div>

                <div className="text-center">
                  <button className="bg-black text-white px-6 py-2.5 rounded-2xl mt-3 hover:border-2 hover:bg-transparent hover:text-black cursor-pointer">
                    FOLLOW
                  </button>
                </div>
              </div>
            );
          })}
        </ul>
        <div className="flex items-center justify-center gap-4 lg:mt-10 mt-15 text-xl font-semibold">
          <button
            className="bg-blue-500 py-2 px-5 cursor-pointer text-white rounded-lg"
            onClick={handlePrev}
          >
            Prev
          </button>
          <button
            className="bg-blue-500 py-2 px-5 text-white cursor-pointer rounded-lg"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>

      <footer className="bg-black text-white lg:mt-10 lg:ml-30 lg:mr-30 rounded-2xl">
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

export default Home;
