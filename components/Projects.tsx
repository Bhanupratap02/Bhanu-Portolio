/** @format */

import Link from "next/link";
import ProjectCard from "./ProjectCard";

interface ProjectsPageProps {
  isHomePage?: boolean;
}

export default function Projects({ isHomePage = true }: ProjectsPageProps) {
  const projects = [
    {
      title: "E-Learning Site",
      description: "Developed a fully featured E Learning Site ",
      image: "profile.jpeg",
      gitHub: "https://github.com/Bhanupratap02/E-Learning-Platform",
      live: null,
    },
    {
      title: "Full featured Blog Portal",
      description:
        "Delivered a feature-rich blog application that not only provides users with a seamless reading experience but also fosters community engagement through comments, favorites, and interactive discussions. The admin dashboard ensures efficient content management and moderation.",
      image: "profile.jpeg",
      gitHub: "https://github.com/Bhanupratap02/blog-frontend",
      live: null,
    },
    {
      title: "Full featured Blog Portal",
      description:
        "Delivered a feature-rich blog application that not only provides users with a seamless reading experience but also fosters community engagement through comments, favorites, and interactive discussions. The admin dashboard ensures efficient content management and moderation.",
      image: "/foodie.jpg",
      gitHub: "https://github.com/Bhanupratap02/blog-frontend",
      live: null,
    },
    {
      title: "Full featured Blog Portal",
      description:
        "Delivered a feature-rich blog application that not only provides users with a seamless reading experience but also fosters community engagement through comments, favorites, and interactive discussions. The admin dashboard ensures efficient content management and moderation.",
      image: "/foodie.jpg",
      gitHub: "https://github.com/Bhanupratap02/blog-frontend",
      live: null,
    },
    {
      title: "Full featured Blog Portal",
      description:
        "Delivered a feature-rich blog application that not only provides users with a seamless reading experience but also fosters community engagement through comments, favorites, and interactive discussions. The admin dashboard ensures efficient content management and moderation.",
      image: "/foodie.jpg",
      gitHub: "https://github.com/Bhanupratap02/blog-frontend",
      live: null,
    },
    {
      title: "Full featured Blog Portal",
      description:
        "Delivered a feature-rich blog application that not only provides users with a seamless reading experience but also fosters community engagement through comments, favorites, and interactive discussions. The admin dashboard ensures efficient content management and moderation.",
      image: "/foodie.jpg",
      gitHub: "https://github.com/Bhanupratap02/blog-frontend",
      live: null,
    },
  ];
  return (
    <div className="mx-8 mt-10 md:mt-1 mb-8" id="projects">
      <div className="  flex flex-col  gap-8 lg:pl-[5rem] ">
        <div className="block  h-[60px]"></div>
        <div className="flex flex-row justify-between">
          <div className="flex  flex-col md:flex-row items-center justify-start gap-4 md:gap-6">
            <p className=" text-aliceblue text-4xl font-bold">Projects</p>

            <div className="w-20 md:w-80 h-[3px] bg-orange-400"></div>
          </div>

          <div>
            <Link href={"/contact"}>
              <button className="border-purple-600 border font-medium text-base py-2 px-4 hover:text-white rounded-xl hover:bg-purple-600 hover:border-0">
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
       col-span-full gap-x-5 gap-y-5"
        >
          {projects.map((item, index) => (
            <ProjectCard
              key={index}
              title={item.title}
              description={item.description}
              gitHub={item.gitHub}
              live={item.live}
              image={item.image}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
