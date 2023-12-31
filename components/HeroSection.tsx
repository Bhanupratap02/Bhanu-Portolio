/** @format */
"use client";
import { AArrowDownIcon, ArrowDownAZIcon, ArrowDownIcon } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import SocialProfiles from "./SocialProfiles";
gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const imgRef = useRef(null);
  const textRef = useRef(null);
  useEffect(():any => {
    // Get the image element
    const image = imgRef.current;
    const text = textRef.current;

    // Set initial position (right outside the viewport)
    gsap.set(image, { y: "100%" });
    gsap.set(text, { y: "-100%" });

    // Create the animation timeline
    const tl = gsap.timeline();
    const el = gsap.timeline();
    el.to(text, {
      y: "6%",
      duration: 1,
      ease: "bounce",
    });
    // Add animation to move from right to center
    tl.to(image, {
      y: "6%",
      duration: 1,
      ease: "power2.inOut", // You can change the easing function
    });

    // If you want to add more animations or events, you can chain them here

    // You can also reverse the animation on component unmount
    return () => tl.reverse();
  }, []);
  return (
    <section className="mx-8" id="hero">
      <div className=" min-h-[90vh] flex flex-col lg:flex-row items-center justify-center relative ">
        {/* Text Section */}

        <div
          className="text-white flex-1 text-center lg:text-left  lg:pl-[12rem] "
          ref={textRef}
        >
          <div className="block xl:hidden h-[60px]"></div>
          <div>
            <p className="text-lg font-bold mb-2">Hi, I am</p>
          </div>
          <div className=" text-aliceblue">
            <p className="text-4xl lg:text-6xl font-bold mb-2">Bhanu Pratap</p>
          </div>
          <div>
            {" "}
            <p className="text-xl text-mediumaquamarine">
              {" "}
              {">"} Full Stack Developer
            </p>
          </div>
          <div>
            <p className="text-lg mt-4 max-sm:px-1 max-md:px-6 max-lg:px-12 text-mediumaquamarine">
              I am a passionate full-stack developer with expertise in ... Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              voluptas veniam, et incidunt dolorum accusantium doloremque
            </p>
          </div>

          <div className="flex py-8  gap-8 items-center lg:justify-start  justify-center">
            <Link href={"/contact"}>
              <button className="border-purple-600 border font-medium text-base py-2 px-4 hover:text-white rounded-xl hover:bg-purple-600 hover:border-0">
                Contact Me!!
              </button>
            </Link>
            <Link href={"/contact"}>
              <button className="border-purple-600 border font-medium text-base py-2 px-4 hover:text-white rounded-xl hover:bg-purple-600 hover:border-0">
                Download CV
              </button>
            </Link>
          </div>
          <div className="block lg:hidden my-3">
            <SocialProfiles displayType="flex-row" />
          </div>
        </div>

        {/* Image Section (Assuming you have an image file in the public folder) */}
        <div className="flex-2">
          <Image
            src="/dev8.svg"
            height={580}
            width={600}
            alt="Your Alt Text"
            className="bg-inherit"
            ref={imgRef}
          />

          <div className="bouncing-ball ">
            <Link href={"#about"} scroll className="bg-transparent">
              <ArrowDownIcon
                size={32}
                color="#fff"
                className="bg-transparent"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
