/** @format */

import Image from "next/image";
import React from "react";

export default function AboutMe() {
  return (
    <div className="mx-8 mt-10 md:mt-1 " id="about">
      <div className="flex flex-col gap-6 lg:pl-[5rem]">
        <div className="flex  flex-col md:flex-row items-center justify-start gap-4 md:gap-6">
          <p className="text-aliceblue text-4xl font-bold">About me</p>
          <div className=" w-20 md:w-80 h-[3px] bg-orange-400 "></div>
        </div>
        <div className="flex flex-col  justify-center md:justify-between lg:flex-row gap-8 items-center  lg:items-center">
          <div className="lg:flex-4">
            <img
              src={"/profile.jpeg"}
              className=" w-[20rem] lg:w-[25rem] bg-cover h-[20rem] lg:border-t-[6px] lg:border-l-[6px] border-slate-800 rounded-[80%] border-[6px] lg:border-b-0 lg:border-r-0 lg:rounded-lg"
              alt="Profile"
            />
          </div>
          <div className="text-lg flex-1 mx-4">
            <p className="text-mediumaquamarine">
              Hi. I am a MERN Stack developer for about 7 years ranging from
              small scale websites to large scale eCommerce web applications.
              (Stripe, Paypal, Coinbase commerce payment gateway integrations
              too !)
            </p>
            <p className="text-mediumaquamarine">
              It all started in 2017 where I first learnt to build static
              landing pages. Then I came to know about how servers work with the
              help of JAVA, Python, PHP and now currently Node.js. That expanded
              my view upon the possibilities of creating huge applications
            </p>
            <p className="text-mediumaquamarine">
              Then I slowly started engaging myself building single page
              application development, state management techniques using
              Redux.js and Context API and sideeffects using Redux-thunk and
              Redux-Saga, building microservices in Node.js and Express.js and
              knowing how to connect to databases using MongoDB and MySQL
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
