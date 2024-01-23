import { createContext, useContext } from "react";

const ThemeContext = createContext({
  themeMode: "light",
  darkMode: () => {},
  lightMode: () => {},
});

export { ThemeContext };

const ThemeProvider = ThemeContext.Provider;

export { ThemeProvider };

export default function useTheme() {
  return useContext(ThemeContext);
}
