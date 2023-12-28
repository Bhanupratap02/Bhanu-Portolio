/** @format */

import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mt-[80px] flex flex-col justify-center items-center">
      <HeroSection />
      <Projects />
    </main>
  );
}
