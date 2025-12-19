import { House, CodeXml, Wrench, NotebookPen, FileText } from 'lucide-react';

export const BottomNav = () => {
  return (
    <div className="flex justify-around items-center m-2 fixed bottom-0 w-full">
      <div>
        <House />
      </div>
      <div>
        <CodeXml />
      </div>
      <div>
        <Wrench />
      </div>
      <div>
        <NotebookPen />
      </div>
      <div>
        <FileText />
      </div>
    </div>
  );
};
