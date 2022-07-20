import React from "react";
import fb from "./fb.svg";
function TailwindPractice() {
  return (
    <div className="container flex">
      <div className="left flex pt-10 flex-col">
        <img src={fb} alt="My Happy SVG" className="w-7/12 -ml-8" />
        <h1 className="text-3xl w-11/12 font-medium">
          Facebook helps you connect and share with the people in your life.
        </h1>
      </div>

      <div className="right w-2/3 flex justify-center content-center pt-8">
        <form className="bg-white flex justify-center content-center flex-col p-4 space-y-5 rounded-md drop-shadow-2xl">
          <input
            type="text"
            className="block rounded-md border-2 border-gray-200 w-96 placeholder:text-gray-500 p-4 placeholder:text-lg"
            placeholder="Email address or phone number"
          />
          <input
            type="text"
            className="block rounded-md border-2 border-gray-200 w-96 placeholder:text-gray-500 p-4 placeholder:text-lg"
            placeholder="Password"
          />
          <button className="block rounded-md border-2 w-96 p-4 bg-blue-500 text-white font-bold text-xl">
            Log In
          </button>
          <a href="http://facebook.com" className="block mx-auto">
            Forgotten password?
          </a>
          <hr className="bg-black" />
          <button className="block rounded-md border-2 w-1/2 mx-auto p-4 bg-green-500 text-white font-bold text-base">Create New Account</button>
        </form>
      </div>
    </div>
  );
}

export default TailwindPractice;
