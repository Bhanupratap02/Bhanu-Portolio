/** @format */

import { AArrowDownIcon, ArrowDownAZIcon, ArrowDownIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HeroSection() {
  return (
    <section className="mx-8" id="hero">
      <div className=" min-h-[90vh] flex flex-col lg:flex-row items-center justify-center relative">
        {/* Text Section */}

        <div className="text-white flex-1 text-center lg:text-left  lg:pl-[12rem] ">
          <div className="block md:hidden h-[60px]"></div>
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
              <button className="border-[#C778DD] border font-medium text-base py-2 px-4 hover:text-mediumaquamarine">
                Contact Me!!
              </button>
            </Link>
            <Link href={"/contact"}>
              <button className="border-[#C778DD] border font-medium text-base py-2 px-4 hover:text-mediumaquamarine">
                Download CV
              </button>
            </Link>
          </div>
        </div>

        {/* Image Section (Assuming you have an image file in the public folder) */}
        <div className="flex-2">
          <Image
            src="/dev.png"
            height={600}
            width={680}
            alt="Your Alt Text"
            className="bg-inherit"
          />

          <div className="bouncing-ball">
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
