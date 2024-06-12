import OptxFooter from "../../shared/components/OptxFooter";
import OptxHeader from "./OptxHeader";
import OptxTopMenu from "./OptxTopMenu";
import { Outlet } from "react-router-dom";

const OptxLandingPage = () => {
  return (
    <>
      <OptxHeader />
      <OptxTopMenu />
      <Outlet />
      <OptxFooter />
    </>
  );
};

export default OptxLandingPage;
