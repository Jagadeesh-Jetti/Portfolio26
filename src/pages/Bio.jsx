import jaggu from '../assets/jaggu.jpg';

export const Bio = () => {
  return (
    <div className="h-screen">
      <div className="flex gap-4">
        <div className="bg-gray-50 h-15 w-15 border">
          <img src={jaggu} />
        </div>
        <div>
          <div className="text-xl font-bold">Jagadeesh Jetti</div>
          <div>Full stack developer</div>
        </div>
      </div>
    </div>
  );
};
