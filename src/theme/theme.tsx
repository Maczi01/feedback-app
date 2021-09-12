import {createTheme} from "@material-ui/core";

const theme = createTheme({
    typography: {
        fontFamily: "Jost"
    },
    palette: {
        primary: {
            main: "#F2F4FF"
        },
        text:{
            primary: "#3A4374"
        },
        whatever: {
            main: "#f6ff5a"
        },
        background: {
            paper: "#f6ff5a"
        }



    }

});
export default theme;