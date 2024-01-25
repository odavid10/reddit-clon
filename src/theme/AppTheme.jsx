import { createContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

// material-ui
import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";

// project import
import { useMode } from "../hooks";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const AppTheme = ({ children }) => {
  const { mode, switchMode } = useMode();
  const [modeState, setModeState] = useState(mode);
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setModeState((prevModeState) =>
          prevModeState === "light" ? "dark" : "light"
        );
        switchMode();
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: modeState,
        },
      }),
    [modeState]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

AppTheme.propTypes = {
  children: PropTypes.node,
};
