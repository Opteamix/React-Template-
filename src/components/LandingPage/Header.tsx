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
import OpteamixLogo from "../../assets/images/Opteamix.jpg";
import Profile from "./Profile";

const Logo = styled.img`
  height: 60px;
`;

const CustomAppBar = styled(AppBar)({
  backgroundColor: "#1A2980 !important",
});

const Header = () => {
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

  return (
    <>
      <CustomAppBar position="static">
        <Toolbar>
          <Logo src={OpteamixLogo} alt="companyLogo" />
          <Typography
            variant="h6"
            component="div"
            sx={{ display: "flex", flexGrow: 1, marginLeft: "10px" }}
          >
            Opteamix
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

export default Header;
