import {createTheme} from "@material-ui/core";

const theme = createTheme({
    typography: {
        fontFamily: "Jost",
    },
    palette: {
        primary: {
            main: "#F2F4FF",
            dark: "#4661E6",
        },
        text:{
            primary: "#3A4374",
            secondary: "#FFFFFF"
        },
        whatever: {
            main: "#f6ff5a"
        },
        background: {
            paper: "#ffffff"
        }



    }

});
export default theme;