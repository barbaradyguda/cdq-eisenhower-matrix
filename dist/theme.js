import { createTheme } from "@mui/material/styles";
function getTheme() {
    var theme = createTheme({
        palette: {
            mode: "dark",
            primary: {
                main: "#4989FF",
            },
            secondary: {
                main: "#3F51B5",
            },
            success: {
                main: "#8BC34A",
            },
        },
    });
    theme = createTheme(theme, {
        components: {
            MuiButton: {
                styleOverrides: {
                    contained: {
                        background: "".concat(theme.palette.primary.main, " linear-gradient(120deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.1)  30%, rgba(255,255,255,0.1)  100%)"),
                        transition: 0.5,
                        //  borderRadius: "100px !important",
                    },
                    root: {
                        boxShadow: "none !important",
                    },
                },
            },
            MuiTypography: {
                styleOverrides: {
                    root: { fontFamily: "OpenSansRegular" },
                },
            },
        },
    });
    return theme;
}
export default getTheme;
