/** @format */

/// components/Card.js
import React from "react";
type ProjectCardProps = {
  title: string;
  image: string; // Assuming the image is local to your project
  gitHub: string;
  description: string;
  live: string | null;
};
const ProjectCard = ({
  title,
  image,
  gitHub,
  description,
  live,
}: ProjectCardProps) => {
  return (
    <div className="flip">
      <div
        className="front"
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        {/* <h1 className="bg-transparent text-black">{title}</h1> */}
      </div>
      <div className="back bg-slate-800">
        <h2 className="bg-transparent">{title}</h2>
        <p className="bg-transparent">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
