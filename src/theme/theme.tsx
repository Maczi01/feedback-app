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
        background: {
            paper: "#F2F4FF"
        }
    }

});
export default theme;