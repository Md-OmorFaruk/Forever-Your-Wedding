import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Root = () => {
      return (
            <div className="max-w-screen-xl mx-auto font-font">
                  <Navbar></Navbar>
                  <Outlet></Outlet>
            </div>
      );
};

export default Root;