import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function AppLayout() {
  return (
    <div className="bg-white px-[100px]">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default AppLayout;
