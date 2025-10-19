import { Outlet } from "react-router";
import { Footer } from "./Footer";
import Navbar from "./Navbar";

const FrontLayout = () => {
  return (
    <>
      <Navbar />

      <Outlet />

      <Footer />
    </>
  );
};

export default FrontLayout;
