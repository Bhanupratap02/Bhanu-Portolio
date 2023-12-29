/** @format */

import Link from "next/link";
import ProjectCard from "./ProjectCard";

interface ProjectsPageProps {
  isHomePage?: boolean;
}

export default function Projects({ isHomePage = true }: ProjectsPageProps) {
  return (
    <div className="mx-8 mt-10 md:mt-1 mb-8" id="projects">
      <div className="  flex flex-col  gap-8 lg:pl-[5rem] ">
        <div className="flex flex-row justify-between">
          <div className="flex justify-between items-center gap-6">
            <p className=" text-aliceblue text-4xl font-bold">Projects</p>

            <div className=" w-80 h-[3px] bg-orange-400 max-md:hidden"></div>
          </div>

          <div>
            <Link href={"/contact"}>
              <button className="border-[#C778DD] border font-medium text-base py-2 px-4 hover:text-mediumaquamarine">
                View All
              </button>
            </Link>
          </div>
        </div>
        <p className="text-mediumaquamarine  font-normal text-base">
          Here is the list of some of my projects i have worked on,feel free to
          check it out
        </p>
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:
       col-span-full gap-x-10 gap-y-5"
        >
          <ProjectCard
            title="Ecomerce Application"
            description="I have created a ecoomerce shping cart application "
            subtitle="MERN Stack APP"
            image="/image.png"
          />
          <ProjectCard
            title="Ecomerce Application"
            description="I have created a ecoomerce shping cart application "
            subtitle="MERN Stack APP"
            image="/image.png"
          />
          <ProjectCard
            title="Ecomerce Application"
            description="I have created a ecoomerce shping cart application "
            subtitle="MERN Stack APP"
            image="/image.png"
          />
          <ProjectCard
            title="Ecomerce Application"
            description="I have created a ecoomerce shping cart application "
            subtitle="MERN Stack APP"
            image="/image.png"
          />
          <ProjectCard
            title="Ecomerce Application"
            description="I have created a ecoomerce shping cart application "
            subtitle="MERN Stack APP"
            image="/image.png"
          />
          <ProjectCard
            title="Ecomerce Application"
            description="I have created a ecoomerce shping cart application "
            subtitle="MERN Stack APP"
            image="/image.png"
          />{" "}
        </ul>
      </div>
    </div>
  );
}
