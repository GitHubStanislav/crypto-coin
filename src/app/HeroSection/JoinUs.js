import React from "react";
import {
  AiFillSafetyCertificate,
  AiOutlineLineChart,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";
import Animation from "@/app/AnimationContainer/Animation";

const JoinUs = () => {
  return (
    <section className="container mx-auto px-8 py-10 mt-2">
      <div className="flex flex-col justify-center items-center md:flex-row md:items-center">
        <h2 className="md:text-6xl sm:text-2xl text-xl text-center font-bold bg-gradient-to-r text-transparent bg-clip-text from-indigo-500 to-pink-500 mb-8 md:mb-0">
          JOIN US NOW!
        </h2>
        <div className="md:ml-4">
          <Animation />
        </div>
      </div>

      <div className="flex items-center justify-center mt-8">
        <div className="text-center text-gray-200 text-lg bg-gray-800 bg-opacity-60 rounded-lg p-8">
          <div className="flex items-center mb-4">
            <AiFillSafetyCertificate className="text-5xl text-pink-500 animate-pulse mr-6" />
            <p className="text-white text-base">
              Join our vibrant community of cryptocurrency enthusiasts and stay
              up to date with the latest trends, news, and insights.
            </p>
          </div>
          <div className="flex items-center mb-4">
            <AiOutlineLineChart className="text-5xl text-pink-500 animate-pulse mr-6" />
            <p className="text-white text-base">
              Gain exclusive access to educational resources and investment
              opportunities.
            </p>
          </div>
          <div className="flex items-center">
            <AiOutlineUsergroupAdd className="text-5xl text-pink-500 animate-pulse mr-6" />
            <p className="text-white text-base">
              Connect with a thriving community of cryptocurrency enthusiasts
              and participate in networking events.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-8">
        <button className="bg-pink-900 hover:bg-pink-600 text-white font-bold py-4 px-6 rounded-full animate-pulse focus:outline-none focus:ring focus:ring-pink-500">
          Join Now
        </button>
      </div>
    </section>
  );
};

export default JoinUs;
