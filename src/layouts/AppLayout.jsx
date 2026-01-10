import { Outlet } from 'react-router-dom';
import { TopHeader } from '../components/header/TopHeader';
import { BottomNav } from '../components/navigation/BottomNav';

export const AppLayout = () => {
  return (
    <div>
      <div className="px-4 lg:mx-100 lg:px-7 ">
        <TopHeader />

        <main>
          <Outlet />
        </main>

        <BottomNav />
      </div>
    </div>
  );
};
