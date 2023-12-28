/** @format */

/// components/Card.js
import React from "react";
type ProjectCardProps = {
  title: string;
  image: string; // Assuming the image is local to your project
  subtitle: string;
  description: string;
};
const ProjectCard = ({
  title,
  image,
  subtitle,
  description,
}: ProjectCardProps) => {
  return (
    <div className="flip">
      <div
        className="front relative"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <h1 className="bg-transparent ">{title}</h1>
      </div>
      <div className="back bg-slate-800">
        <h2 className="bg-transparent">{subtitle}</h2>
        <p className="bg-transparent">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
