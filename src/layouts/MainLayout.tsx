import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <div    > 
        <Outlet />
      </div>
    </div>
  );
}
// className="pt-16"