/** @format */

import React from "react";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
import { Menu } from "lucide-react";
export default function MobileMenu() {
  const navItems = ["_Home", "_About-me", "_Projects", "_Contact me"];
  return (
    <Sheet>
      <SheetTrigger className=" lg:hidden  hover:opacity-75 transition">
        <Menu />
      </SheetTrigger>
      <SheetContent side="top" className="p-0 h-full   border-0 bg-inherit  ">
        <ul className=" w-full text-center text-lg">
          {navItems.map((item) => (
            <li
              className="py-8  text-white border-b border-b-slate-700"
              key={`mobile-${item}`}
            >
              {item}
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
