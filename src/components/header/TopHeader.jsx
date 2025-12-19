import { CircleUserRound, SunMoon } from 'lucide-react';

export const TopHeader = () => {
  return (
    <div className="flex justify-between m-5">
      <div>
        <CircleUserRound />
      </div>
      <div>
        <SunMoon />
      </div>
    </div>
  );
};
