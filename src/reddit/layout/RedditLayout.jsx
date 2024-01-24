import { useState } from "react";
import PropTypes from "prop-types";

// material-ui
import { Box, Grid, Toolbar } from "@mui/material";

// project imports
import { Navbar, Sidebar } from "../components";

const drawerWidth = 240;

const RedditLayout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
  return (
    <Box display="flex">
      <Navbar
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
      />

      <Sidebar
        drawerWidth={drawerWidth}
        mobileOpen={mobileOpen}
        handleDrawerTransitionEnd={handleDrawerTransitionEnd}
        handleDrawerClose={handleDrawerClose}
      />

      <Box component="main" p={3}>
        <Toolbar />
        <Grid container p={1}>
          <Grid item xs={12}>
            {children}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

RedditLayout.propTypes = {
  children: PropTypes.node,
};

export default RedditLayout;
