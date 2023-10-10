import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Layout = () => {
      return (
            <div className="max-w-screen-xl mx-auto font-font">
                  <Navbar></Navbar>
                  <Outlet></Outlet>
                  
            </div>
      );
};

export default Layout;