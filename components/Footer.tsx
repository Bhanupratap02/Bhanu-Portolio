/** @format */

import Image from "next/image";
import Link from "next/link";
const contacts = [
  {
    img: "/GitHub.png",
    alt: "disord icon",
    href: "https://discordapp.com/users/938844640004673536",
    text: "!harshit#7305",
    size: 30,
  },
  {
    img: "/Linkedin.png",
    alt: "linkedin icon",
    href: "https://www.linkedin.com/in/ahujaharshit26/",
    text: "@ahujaharshit26",
    size: 30,
  },
  {
    img: "/Email.png",
    alt: "email icon",
    href: "mailto: ahujaharshit26@gamil.com",
    text: "ahujaharshit26@gamil.com",
    size: 35,
  },
];

export default function Footer() {
  return (
    <footer className="border-t mt-[2rem] border-slate-700" id="contact">
      <div className="ml-36 mr-32 mt-8 max-sm:ml-5 max-sm:mr-5">
        <div className="flex justify-between flex-wrap max-md:gap-2 pb-4">
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 flex-wrap">
              <Link target="_blank" href={"mailto: bhanupratap193@gmail.com"}>
                <span className="text-[#ABB2BF] text-base font-normal">
                  bhanupratap193@gmail.com
                </span>
              </Link>
            </div>
            <div className="text-white font-normal text-base">
              Full Stack Web App Developer
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-white text-lg font-medium">Social Media</div>
            <div className="flex gap-3 items-center">
              {contacts?.map((item, idx) => {
                return (
                  <div key={idx + item?.href}>
                    <Link target="_blank" href={item?.href}>
                      <Image
                        src={item?.img}
                        height={item.size}
                        width={item.size}
                        alt={item?.alt}
                      />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
