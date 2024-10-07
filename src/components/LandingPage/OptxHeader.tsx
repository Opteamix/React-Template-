import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import { IconButton, ListItemIcon } from "@mui/material";
import Logout from "@mui/icons-material/Logout";
import styled from "styled-components";
import CompanyLogo from "../../assets/images/CompanyLogo.png";
import Profile from "./Profile";
import { useDispatch, useSelector } from "react-redux";
import { updateSidebarState } from "../../utils/sideBarSlice";
import DehazeIcon from '@mui/icons-material/Dehaze';

const Logo = styled.img`
  height: 1.5rem;
  width: 1.3125rem;
  border-radius: 50%;
`;

const CustomAppBar = styled(AppBar)`
  background-color: black !important;
  height: 55px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

`;

const BarsIcon = styled(DehazeIcon)`
  display: flex;
  align-items: center;
  padding: 10px;
  flex-wrap: wrap;
  list-style: none;
  cursor: pointer;
`;

const OptxHeader = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [displayProfile, setDisplayProfile] = useState(false);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    handleClose();
    navigate("/");
  };

  const openProfileDialog = () => {
    setDisplayProfile(true);
  };

  const closeProfileDialog = () => {
    setDisplayProfile(false);
  };

  const dispatch = useDispatch();

  const sidebarState = useSelector((store: any) => store.sidebar.show);

  const handleSideBarToggle = () => {
    dispatch(updateSidebarState(!sidebarState));
  };

  return (
    <>
      <CustomAppBar position="static">
        <Toolbar>
          <BarsIcon onClick={handleSideBarToggle} />
          <Logo src={CompanyLogo} alt="companyLogo" />
          <Typography
            variant="h6"
            component="div"
            sx={{ display: "flex", flexGrow: 1, marginLeft: "10px" }}
          >
            Company Name
          </Typography>
          User Name
          <IconButton onClick={handleClick} color="inherit">
            <Avatar alt="User Avatar" src="/static/images/avatar/1.jpg" />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&::before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={openProfileDialog}>
              <Avatar /> Profile
            </MenuItem>
            <MenuItem onClick={logout}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </Toolbar>
      </CustomAppBar>
      <Profile open={displayProfile} handleClose={closeProfileDialog} />
    </>
  );
};

export default OptxHeader;
