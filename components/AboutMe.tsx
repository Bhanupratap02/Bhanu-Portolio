/** @format */
"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function AboutMe() {
  const leftComponentRef = useRef(null);
  const rightComponentRef = useRef(null);
  useEffect(() => {
    const leftComponent = leftComponentRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: leftComponent,
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none none",
        onEnter: () => {
          gsap.fromTo(
            leftComponent,
            {
              opacity: 0,
              x: -50,
            },
            {
              opacity: 1,
              x: 0,
              duration: 1,
            }
          );
        },
      },
    });

    // Refresh ScrollTrigger whenever the component unmounts
    return () => tl.scrollTrigger?.refresh();
  }, []);

  useEffect(() => {
    const rightComponent = rightComponentRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: rightComponent,
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none none",
        onEnter: () => {
          gsap.fromTo(
            rightComponent,
            {
              opacity: 0,
              x: 50,
            },
            {
              opacity: 1,
              x: 0,
              duration: 1,
            }
          );
        },
      },
    });

    // Refresh ScrollTrigger whenever the component unmounts
    return () => tl?.scrollTrigger?.refresh();
  }, []);
  return (
    <div className="my-6 min-h-max" id="about">
      <div className="mx-8   md:mt-1">
        <div className="flex flex-col gap-6 lg:pl-[5rem]">
          <div className="block md:hidden h-[60px]"></div>
          <div
            className="flex  flex-col md:flex-row items-center justify-start gap-4 md:gap-6"
            ref={leftComponentRef}
          >
            <p className="text-aliceblue text-4xl font-bold">About me</p>
            <div className=" w-20 md:w-80 h-[3px] bg-orange-400 "></div>
          </div>
          <div
            className="flex flex-col  justify-center md:justify-between lg:flex-row gap-8 items-center  lg:items-center"
            ref={rightComponentRef}
          >
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
                landing pages. Then I came to know about how servers work with
                the help of JAVA, Python, PHP and now currently Node.js. That
                expanded my view upon the possibilities of creating huge
                applications
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
    </div>
  );
}
