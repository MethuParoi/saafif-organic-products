import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <div>
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
