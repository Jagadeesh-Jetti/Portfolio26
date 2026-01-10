import { CircleUserRound, SunMoon } from 'lucide-react';
import { House, CodeXml, Wrench, NotebookPen, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const TopHeader = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between my-5 p-4 bg-white">
      <div>
        <CircleUserRound />
      </div>
      <div onClick={() => navigate('/')}>
        <House />
      </div>
      <div onClick={() => navigate('/projects')}>
        <CodeXml />
      </div>
      <div onClick={() => navigate('/skills')}>
        <Wrench />
      </div>
      <div onClick={() => navigate('/blogs')}>
        <NotebookPen />
      </div>
      <div onClick={() => navigate('/resume')}>
        <FileText />
      </div>
      <div>
        <SunMoon />
      </div>
    </div>
  );
};
