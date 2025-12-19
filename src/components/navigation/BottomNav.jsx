import { House, CodeXml, Wrench, NotebookPen, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const BottomNav = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-around items-center p-3 fixed bg-white bottom-0 w-full">
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
    </div>
  );
};
