import { useEffect, useState } from "react";
import PropTypes from "prop-types";

// material-ui
import { Box, Toolbar } from "@mui/material";

// project imports
import { Navbar, Sidebar } from "../components";

const drawerWidth = 240;

const RedditLayout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isXsSize = window.innerWidth <= 600;

      setMobileOpen((prevMobileOpen) => {
        if (isXsSize && prevMobileOpen) {
          return false;
        }
        return prevMobileOpen;
      });
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

      <Box component="main" p={3} mx="auto">
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

RedditLayout.propTypes = {
  children: PropTypes.node,
};

export default RedditLayout;
