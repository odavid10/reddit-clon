import PropTypes from "prop-types";

// material-ui
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

// third-party
import { useNavigate } from "react-router-dom";

const getIcon = (text) => {
  switch (text) {
    case "Hot":
      return <WhatshotIcon />;
    case "New":
      return <NewspaperIcon />;
    case "Rising":
      return <TrendingUpIcon />;
    default:
      return <NewspaperIcon />;
  }
};

const MyDrawer = ({ onClick }) => {
  return (
    <>
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="div"
          onClick={onClick("")}
          sx={{ cursor: "pointer" }}
        >
          Reddit
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {["Hot", "New", "Rising"].map((text) => (
          <ListItem key={text} disablePadding onClick={onClick(text)}>
            <ListItemButton>
              <ListItemIcon>{getIcon(text)}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};

MyDrawer.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export const Sidebar = ({
  drawerWidth,
  mobileOpen,
  handleDrawerTransitionEnd,
  handleDrawerClose,
}) => {
  const navigate = useNavigate();

  const handleNavigate = (page) => () => {
    navigate(`/${page}`);
  };

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        <MyDrawer onClick={handleNavigate} />
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
        open
      >
        <MyDrawer onClick={handleNavigate} />
      </Drawer>
    </Box>
  );
};

Sidebar.propTypes = {
  drawerWidth: PropTypes.number.isRequired,
  mobileOpen: PropTypes.bool.isRequired,
  handleDrawerTransitionEnd: PropTypes.func.isRequired,
  handleDrawerClose: PropTypes.func.isRequired,
};
