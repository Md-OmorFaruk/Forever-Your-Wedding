import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = () => {
      return (
            <div>
                  <div className="max-w-screen-xl mx-auto font-font">
                  <Navbar></Navbar>
                  <Outlet></Outlet>
            </div>
            <Footer></Footer>
            </div>
      );
};

export default Layout;