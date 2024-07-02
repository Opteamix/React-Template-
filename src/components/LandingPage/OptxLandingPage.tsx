import OptxFooter from "../../shared/components/OptxFooter";
import OptxHeader from "./OptxHeader";
import { Outlet } from "react-router-dom";
import OptxTopMenu from "./TopMenu/OptxTopMenu";
import OptxMobileTopMenu from "./TopMenu/OptxMobileTopMenu";

const OptxLandingPage = () => {
  return (
    <>
      <OptxHeader />
      <OptxTopMenu />
      <OptxMobileTopMenu />
      <Outlet />
      <OptxFooter />
    </>
  );
};

export default OptxLandingPage;
