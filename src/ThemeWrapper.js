import { useMemo, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { ColorModeContext } from "./ThemeContext";
import { getTheme } from "./themes";

export default function ThemeWrapper({ children }) {
    const [mode, setMode] = useState("light");
    const [theme, setTheme] = useState(null);

    const toggleTheme = () => {
        setMode((prev) => (prev === "light" ? "dark" : "light"));
    };

    useMemo(() => {
        setTheme(getTheme(mode))
    }, [mode]);

    return (
        <ColorModeContext.Provider value={{ mode, toggleTheme }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}