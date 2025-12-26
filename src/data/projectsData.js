export const projectsData = [
  {
    id: 1,
    title: 'FocusFlow – AI Productivity Planner',
    shortDescription:
      'AI-powered productivity planner to set goals, manage tasks, and stay consistent.',
    description:
      'FocusFlow is an AI-powered productivity planner built with the MERN stack. It helps users set goals, plan tasks, and stay consistent with their workflow. The app includes secure authentication, full CRUD task management, Redux-based global state handling, and a clean, distraction-free UI styled using Tailwind CSS.',
    visitLink: 'https://focusflow.app', // can be "#" for now
    codeLink: 'https://github.com/yourusername/focusflow',
    techstack: ['MERN', 'Redux', 'Tailwind CSS'],
    images: [
      '/images/focusflow-1.png',
      '/images/focusflow-2.png',
      '/images/focusflow-3.png',
    ],
    type: 'Full Stack',
  },
  {
    id: 2,
    title: 'Portfolio Website (LinkedIn-style Feed)',
    shortDescription:
      'Mobile-first portfolio inspired by LinkedIn’s feed layout.',
    description:
      'Designed and developed a minimal, mobile-first portfolio website inspired by LinkedIn’s feed UI. The site focuses on storytelling rather than static lists, showcasing projects, updates, and blogs in a clean feed-based layout.',
    visitLink: '#',
    codeLink: 'https://github.com/yourusername/portfolio',
    techstack: ['React', 'React Router', 'Tailwind CSS'],
    images: ['/images/portfolio-feed.png'],
    featured: false,
    type: 'Frontend',
  },
];
