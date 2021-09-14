import Navbar from "../components/Navbar";
import React from "react";
import Footer from "../components/Footer";
import Box from "@material-ui/core/Box";
import {makeStyles, Theme} from "@material-ui/core";

type Props = {
    children: JSX.Element,
};

const useStyles = makeStyles((theme: Theme) => ({
        template: {
            width: "80vw",
            margin: "0 auto"
        }
    }))
;

const MainTemplate: React.FC<Props> = ({children}) => {

    const classes = useStyles();

    return (
        <Box bgcolor="#F2F4FF">
            <Navbar/>
            <Box className={classes.template}>
                {children}
            </Box>
            <Footer/>
        </Box>
    )
}

export default MainTemplate;
