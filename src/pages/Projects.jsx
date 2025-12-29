import { useState } from 'react';
import { projectsData } from '../data/projectsData';
import { Globe, Github } from 'lucide-react';
import image1 from '../assets/image1.png';

const FILTERS = ['All', 'Landing Pages', 'Frontend', 'Full Stack', 'Backend'];

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects =
    activeFilter === 'All'
      ? projectsData
      : projectsData.filter((project) => project.type === activeFilter);

  return (
    <div className="bg-gray-200">
      <div className="flex gap-2 overflow-x-auto py-2 bg-white pl-3">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition ${
              activeFilter === filter
                ? 'bg-white text-blue-900 shadow'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {filteredProjects.map((project) => (
        <div key={project.id} className="mb-3 p-4 shadow-md bg-white">
          <h3 className="text-xl font-semibold">{project.title}</h3>

          <div className="flex gap-2 text-sm mt-1">
            <span className="bg-gray-200 px-2 rounded">{project.type}</span>

            <div className="flex gap-1 text-gray-500">
              {project.techstack.map((tech, index) => (
                <span key={tech}>
                  {tech}
                  {index !== project.techstack.length - 1 && ' |'}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-3 mt-2">
            <p className="flex-1 text-sm text-gray-700">
              {project.shortDescription}
            </p>

            <img
              src={image1}
              alt={project.title}
              className="w-20 h-20 shrink-0 object-cover rounded"
            />
          </div>

          <div className="flex gap-3 mt-3">
            <a
              href={project.liveUrl}
              target="_blank"
              className="flex items-center gap-1 px-3 py-1 text-sm bg-black text-white rounded hover:opacity-90"
            >
              <Globe size={16} />
              Visit
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              className="flex items-center gap-1 px-3 py-1 text-sm border rounded hover:bg-gray-100"
            >
              <Github size={16} />
              Code
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
