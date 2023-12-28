/** @format */

import type { NextPage } from "next";

const Header: NextPage = () => {
  return (
  
      <div className="w-full h-[56.19px] flex justify-between text-center items-center text-base  font-fira-code">
        <div className="flex justify-evenly items-center gap-8  ">
          <div className="flex flex-row items-center justify-start w-[20rem] text-white ">
            <span className="">_Bhanu Pratap Behera</span>
          </div>
          <div className="hidden lg:flex lg:flex-row items-center justify-start">
            <div className="flex border-b-orange-300 border-b-[1px] overflow-hidden flex-row items-center justify-center py-0 pr-0  gap-[31px] text-white ">
              <div className="  relative box-border w-px h-14 border-r-[1px] border-solid  border-slate-700" />
              <div className="relative ">_Hello</div>
              <div className=" relative box-border w-px h-14  border-r-[1px] border-solid border-slate-700" />
            </div>
            <div className="flex flex-row items-center justify-center py-0 pr-0 pl-8 gap-[31px]">
              <div className="relative">_About-me</div>
              <div className="relative box-border w-px h-14 border-r-[1px] border-solid border-slate-700" />
            </div>
            <div className="flex flex-row items-center justify-center py-0 pr-0 pl-8 gap-[31px]">
              <div className="relative">_Projects</div>
              <div className="relative box-border w-px h-14 border-r-[1px] border-solid border-slate-700" />
            </div>
          </div>
        </div>
        <div className="hidden lg:flex flex-row items-center justify-center py-0 pr-0 pl-8 gap-[31px]">
          <div className="border-r-[0px]  relative box-border w-px h-14 lg:border-r-[1px] border-solid border-slate-700" />
          <div className="relative">_Contact me</div>
        </div>
      </div>

  );
};

export default Header;
