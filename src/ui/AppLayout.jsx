import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="bg-white">
      <div className=" px-[100px]">
        <Navbar />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
