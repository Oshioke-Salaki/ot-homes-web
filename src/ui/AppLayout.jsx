import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function AppLayout() {
  return (
    <div className="bg-white">
      <div className=" px-[100px]">
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
}

export default AppLayout;
