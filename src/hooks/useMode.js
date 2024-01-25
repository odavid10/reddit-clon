import { useState } from "react";

export const useMode = () => {
  const [mode, setMode] = useState(
    localStorage.getItem("dark-mode") || "light"
  );

  const switchMode = () => {
    setMode((prevMode) => {
      localStorage.setItem(
        "dark-mode",
        prevMode === "light" ? "dark" : "light"
      );
      return prevMode === "light" ? "dark" : "light";
    });
  };

  return {
    mode,
    switchMode,
  };
};
