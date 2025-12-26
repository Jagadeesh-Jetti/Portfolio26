import { useState } from 'react';
import { projectsData } from '../data/projectsData';

const FILTERS = ['All', 'Landing Pages', 'Frontend', 'Full Stack', 'Backend'];

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  return (
    <div className=" bg-gray-200">
      {/* <h1 className="font-bold ml-1"> Projects</h1> */}

      <div className="flex gap-2 overflow-x-auto no-scrollbar py-1 bg-white pl-3">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
              activeFilter === filter
                ? 'bg-white text-blue-900 shadow'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {projectsData.map((project) => (
        <div className=" mb-3 p-4 border-none border-amber-950 shadow-md bg-white">
          <div className="text-lg font-semibold ">{project?.title}</div>
          <div className="flex gap-2 ">
            <div className="bg-gray-200 px-1 text-gray-700 hover:bg-gray-200">
              {project.type}
            </div>
            <div className="flex gap-2 ">
              {project.techstack.map((tech) => (
                <span className=""> {tech} | </span>
              ))}
            </div>
          </div>
          <div className="">{project?.shortDescription}</div>
          {/* <div className="flex justify-around m-3">
            {project.techstack.map((tech) => (
              <div className="text-xs border-none border-gray-400 shadow-sm p-1">
                {tech}
              </div>
            ))}
          </div> */}
          <div className="flex">
            <div className="m-2 p-1 border text-sm p-2,2"> Visit </div>
            <div className="m-2 p-1 border text-sm p-2,2"> Code </div>
          </div>
        </div>
      ))}
      {/* <div>
        <div className=" m-2 p-5 border-none border-amber-950 shadow-md">
          <div className="text-lg font-medium">{title}</div>
          <div className="flex">
            <div className="m-2 p-1 border text-sm p-2,2"> Visit </div>
            <div className="m-2 p-1 border text-sm p-2,2"> Code </div>
          </div>
          <div className="text-gray-500">
            FocusFlow is an AI-powered productivity planner built with the MERN
            stack, designed to help users set goals, plan tasks, and stay
            consistent. It features secure authentication, full CRUD task
            management, Redux-based state handling, and a clean,
            distraction-free UI styled with Tailwind CSS. {description}
          </div>
          <div className="flex justify-around m-3">
            <div className="text-xs border-none border-gray-400 shadow-sm p-1">
              HTML
            </div>
            <div className="text-xs border-none border-gray-400 shadow-sm p-1">
              Javacript
            </div>
            <div className="text-xs border-none border-gray-400 shadow-sm p-1">
              React
            </div>
            <div className="text-xs border-none border-gray-400 shadow-sm p-1">
              Tailwindcss
            </div>
          </div>
        </div> */}
      {/* <div className="m-2 p-5 border-none border-amber-950 shadow-md">
          <div className="text-lg font-bold">
            FocusFlow - AI powered Productivity Planner
          </div>
          <div className="flex">
            <div className="m-2"> visit </div>
            <div className="m-2"> code </div>
          </div>
          <div className="text-gray-500">
            FocusFlow is an AI-powered productivity planner built with the MERN
            stack, designed to help users set goals, plan tasks, and stay
            consistent. It features secure authentication, full CRUD task
            management, Redux-based state handling, and a clean,
            distraction-free UI styled with Tailwind CSS.
          </div>
          <div className="flex justify-around m-3">
            <div className="text-xs border-none border-gray-400 shadow-sm p-1">
              HTML
            </div>
            <div className="text-xs border-none border-gray-400 shadow-sm p-1">
              Javacript
            </div>
            <div className="text-xs border-none border-gray-400 shadow-sm p-1">
              React
            </div>
            <div className="text-xs border-none border-gray-400 shadow-sm p-1">
              Tailwindcss
            </div>
          </div>
        </div> */}
      {/* <div className="m-2 p-5 border-none border-amber-950 shadow-md">
          <div className="text-lg font-bold">
            FocusFlow - AI powered Productivity Planner
          </div>
          <div className="flex">
            <div className="m-2"> visit </div>
            <div className="m-2"> code </div>
          </div>
          <div className="text-gray-500">
            FocusFlow is an AI-powered productivity planner built with the MERN
            stack, designed to help users set goals, plan tasks, and stay
            consistent. It features secure authentication, full CRUD task
            management, Redux-based state handling, and a clean,
            distraction-free UI styled with Tailwind CSS.
          </div>
          <div className="flex justify-around m-3">
            <div className="text-xs border-none border-gray-400 shadow-sm p-1">
              HTML
            </div>
            <div className="text-xs border-none border-gray-400 shadow-sm p-1">
              Javacript
            </div>
            <div className="text-xs border-none border-gray-400 shadow-sm p-1">
              React
            </div>
            <div className="text-xs border-none border-gray-400 shadow-sm p-1">
              Tailwindcss
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};
