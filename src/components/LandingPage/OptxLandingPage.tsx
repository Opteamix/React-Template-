import OptxFooter from "../../shared/components/OptxFooter";
import OptxHeader from "./OptxHeader";
import OptxTopMenu from "./TopMenu/OptxTopMenu";
import OptxMobileTopMenu from "./TopMenu/OptxMobileTopMenu";
import OptxSidebar from "./Sidemenu/OptxSidebar";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  background: #F1F1F1;
  height: calc(100vh - 148px);
`;

const CustomMain = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: auto;
  background-color: #F3F3F3;
`;

const OptxLandingPage = () => {
  return (
    <>
      <OptxHeader />
      <OptxTopMenu />
      <OptxMobileTopMenu />
      <Main>
        <OptxSidebar />
        <CustomMain>
        <Outlet />
        </CustomMain>
      </Main>
      <OptxFooter />
    </>
  );
};

export default OptxLandingPage;
