import { Outlet } from 'react-router-dom';
import { TopHeader } from '../components/header/TopHeader';
import { BottomNav } from '../components/navigation/BottomNav';

export const AppLayout = () => {
  return (
    <div>
      <TopHeader />

      <main>
        <Outlet />
      </main>

      <BottomNav />
    </div>
  );
};
