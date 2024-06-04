import Header from "./Header";
import TopMenu from "./TopMenu";
import { Outlet } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <Header />
      <TopMenu />
      <Outlet />
    </>
  );
};

export default LandingPage;
