import { AccountCircle } from "@mui/icons-material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import {
  Divider,
  IconButton,
  ListItemIcon,
  ListItemText,
  MenuList,
  Typography,
} from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box } from "@mui/system";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/actions/auth";
import { Link } from "react-router-dom";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    setAnchorEl(null);
    localStorage.removeItem("token");
    onLogoutUser();
  };

  // Global State
  const userGlobal = useSelector((state) => state.userGlobal);

  const dispatch = useDispatch();
  const onLogoutUser = (data) => dispatch(logoutUser(data));

  return (
    <div>
      <Box display="flex" alignItems="center">
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleClick}
          style={{ color: "#FFFF" }}
          aria-expanded={open ? "true" : undefined}
        >
          <AccountCircle />
        </IconButton>
      </Box>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        PaperProps={{
          elevation: 1,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.12))",
            mt: 0,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 19,
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
        <MenuList>
          <Box mb={2} mx={3}>
            <ListItemText>
              <Typography fontSize="14px" fontWeight={500}>
                {userGlobal.username}{" "}
              </Typography>
              <Typography fontSize="12px">{userGlobal.email}</Typography>
            </ListItemText>
          </Box>

          <Divider />
          {userGlobal.role === "admin" ? (
            <MenuItem dense>
              <Box
                display="flex"
                alignItems="center"
                component={Link}
                sx={{ textDecoration: "none" }}
                color="inherit"
                to="/admin"
              >
                <ListItemIcon>
                  <DashboardCustomizeOutlinedIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Admin Dashboard</ListItemText>
              </Box>
            </MenuItem>
          ) : null}
          <MenuItem dense>
            <Box
              display="flex"
              alignItems="center"
              component={Link}
              sx={{ textDecoration: "none" }}
              color="inherit"
              to="/profile"
            >
              <ListItemIcon>
                <PersonOutlineOutlinedIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Profile</ListItemText>
            </Box>
          </MenuItem>
          <MenuItem dense>
            <Box
              display="flex"
              alignItems="center"
              component={Link}
              sx={{ textDecoration: "none" }}
              color="inherit"
              to="/transaction"
            >
              <ListItemIcon>
                <ReceiptOutlinedIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Transactions</ListItemText>
            </Box>
          </MenuItem>
          <MenuItem dense>
            <Box
              display="flex"
              alignItems="center"
              component={Link}
              sx={{ textDecoration: "none" }}
              color="inherit"
              to="/settings"
            >
              <ListItemIcon>
                <SettingsOutlinedIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Account Settings</ListItemText>
            </Box>
          </MenuItem>
          <Divider />
          <MenuItem dense onClick={handleLogout}>
            <Box display="flex" alignItems="center">
              <ListItemIcon>
                <LogoutOutlinedIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Logout</ListItemText>
            </Box>
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}
