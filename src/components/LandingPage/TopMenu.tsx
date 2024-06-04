import styled from "styled-components";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { LandingPageTabs } from "./constants/tabs";
import { useNavigate } from "react-router-dom";

const CustomNav = styled("nav")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#d0d0dc",
  height: "48px",
});

const CustomUl = styled("ul")({
  listStyle: "none",
  margin: 0,
  padding: 0,
  display: "flex",
});

const CustomLi = styled("li")({
  fontWeight: 600,
  fontSize: "18px",
  display: "flex",
  position: "relative",
  marginRight: "20px",
  padding: "10px",
  cursor: "pointer",
  "&:hover > ul": {
    display: "block",
  },
});

const SubMenu = styled("ul")({
  display: "none",
  position: "absolute",
  top: "100%",
  left: 0,
  listStyle: "none",
  margin: 0,
  padding: "0",
  backgroundColor: "#fff",
  boxShadow: "0 2px 9px 0 rgba(0, 0, 0, 0.2)",
  borderRadius: "12px",
  zIndex: 1,
});

const SubMenuItem = styled("li")({
  padding: "10px",
  whiteSpace: "nowrap",
  display: "flex",
  fontWeight: 400,
  "&:hover": {
    backgroundColor: "#f1f1f1",
  },
});

const TopMenu = () => {
  const navigate = useNavigate();

  const handleMenuClick = (
    tab: { label: string; submenu: string[] },
    submenu = ""
  ) => {
    const tabName = tab.label.toLowerCase();
    if (tab.submenu.length > 0) {
      const menu = submenu.toLowerCase();
      navigate(`/landing-page/${tabName}/${menu}`);
    } else {
      navigate(`/landing-page/${tabName}`);
    }
  };

  return (
    <div>
      <CustomNav>
        <CustomUl>
          {LandingPageTabs.map((tab, index) => (
            <CustomLi key={index}>
              {tab.submenu.length > 0 ? (
                <>
                  {tab.label}
                  <ExpandMore />
                  <SubMenu>
                    {tab.submenu.map((submenu, index) => (
                      <SubMenuItem
                        key={index}
                        onClick={() => handleMenuClick(tab, submenu)}
                      >
                        {submenu}
                      </SubMenuItem>
                    ))}
                  </SubMenu>
                </>
              ) : (
                <div onClick={() => handleMenuClick(tab)}>{tab.label}</div>
              )}
            </CustomLi>
          ))}
        </CustomUl>
      </CustomNav>
    </div>
  );
};

export default TopMenu;
