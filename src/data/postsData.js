import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';

export const posts = [
  {
    id: 1,
    content:
      'Started rebuilding my portfolio with a mobile-first mindset, inspired by LinkedIn’s feed layout to focus more on storytelling and clarity.',
  },
  {
    id: 2,
    content:
      'Designed and developed an AI-powered productivity planner using the MERN stack with secure authentication, Redux-based state management, and a distraction-free UI.',
    link: '/projects',
    linkText: 'View Project',
    images: [image1, image2, image3],
  },
  {
    id: 3,
    content:
      'Implemented a feed-based home page to showcase projects, updates, and blogs in a familiar, easy-to-scan format.',
    link: '/projects',
    linkText: 'See Projects',
    images: [image4],
  },
  {
    id: 4,
    content:
      'Sharing my experience of returning to coding after a long break and how I avoided overwhelm by building small, focused projects.',
    link: '/blogs',
    linkText: 'Read Blog',
  },
];
