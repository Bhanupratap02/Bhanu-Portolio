/** @format */

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HeroSection() {
  return (
    <section className="mx-8">
      <div className=" min-h-[70vh] flex flex-col lg:flex-row items-center justify-center">
        {/* Text Section */}

        <div className="text-white text-center lg:text-left lg:pl-[12rem] ">
          <div>
            <p className="text-lg font-bold mb-2">Hi, I am</p>
          </div>
          <div className=" text-aliceblue">
            <p className="text-4xl font-bold mb-2">Bhanu Pratap</p>
          </div>
          <div>
            {" "}
            <p className="text-xl text-mediumaquamarine">
              {" "}
              {">"} Full Stack Developer
            </p>
          </div>
          <div>
            <p className="text-sm mt-4 text-mediumaquamarine">
              I am a passionate full-stack developer with expertise in... 
            </p>
          </div>

          <div className="flex py-8  gap-8 items-center md:justify-start  justify-center">
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
        <div className="w-[600]">
          <Image
            src="/dev.png"
            height={600}
            width={680}
            alt="Your Alt Text"
            className="bg-inherit"
          />
        </div>
      </div>
    </section>
  );
}
