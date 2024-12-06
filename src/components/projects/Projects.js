import React from "react";
import Title from "../layouts/Title";
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="NETFLIX CLONE"
          des="Developed a Netflix clone web application using React.js, featuring Firebase authentication, TMDB API integration, Redux for state management, and Tailwind CSS for styling. The app enables users to browse, search, and view movie trailers with seamless navigation via React Router, showcasing expertise in dynamic data fetching, responsive design, and user interaction."
          src={projectOne}
        />
        <ProjectsCard
          title="Swiggy Replica"
          des="Developed a Swiggy clone using React.js, integrating the real-time Swiggy API for data fetching. Features include restaurant search, rating-based filtering, individual menus, and a robust cart powered by Redux. Styled with Tailwind, bundled with Parcel, and optimized with shimmer skeletons for seamless navigation and enhanced user experience."
          src={projectTwo}
        />
        <ProjectsCard
          title="Youtube Clone"
          des="Developed a YouTube replica web application using React.js and Redux for state management. The app features a search functionality with API integration and debouncing to display video suggestions in real time. Video cards show channel names and titles based on user queries, with clickable links redirecting to video pages. The project is fully mobile-responsive and ensures a smooth, user-friendly experience."
          src={projectThree}
        />
      </div>
    </section>
  );
};

export default Projects;
