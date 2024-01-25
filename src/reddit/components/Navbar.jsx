import PropTypes from "prop-types";
import { useContext } from "react";

// material-ui
import Brightness4Icon from "@mui/icons-material/Brightness4";
import MenuIcon from "@mui/icons-material/Menu";
import NightlightIcon from "@mui/icons-material/Nightlight";
import {
  AppBar,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  Switch,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";

// third-party
import { useNavigate } from "react-router-dom";

// project imports
import { ColorModeContext } from "../../theme/AppTheme";

export const Navbar = ({ handleDrawerToggle }) => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/");
  };

  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Grid
          container
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid
            item
            xs={9}
            sm={10}
            md={11}
            display={"flex"}
            alignItems="center"
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              onClick={onClick}
              sx={{ cursor: "pointer" }}
            >
              Reddit
            </Typography>
          </Grid>
          <Grid item xs={3} sm={2} md={1}>
            <FormGroup
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <FormControlLabel
                control={
                  <Switch
                    checked={theme.palette.mode === "dark"}
                    onChange={colorMode.toggleColorMode}
                    name="gilad"
                    color="success"
                  />
                }
                label={
                  theme.palette.mode === "dark" ? (
                    <NightlightIcon />
                  ) : (
                    <Brightness4Icon />
                  )
                }
                sx={{ ml: 0 }}
              />
            </FormGroup>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

Navbar.propTypes = {
  drawerWidth: PropTypes.number.isRequired,
  handleDrawerToggle: PropTypes.func.isRequired,
};
