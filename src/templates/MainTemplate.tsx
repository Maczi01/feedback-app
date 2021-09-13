import Navbar from "../components/Navbar";
import React from "react";
import Footer from "../components/Footer";
import Box from "@material-ui/core/Box";

type Props = {
    children: JSX.Element,
};

const MainTemplate: React.FC<Props> = ({children}) => (
    <Box bgcolor="#eeeeee">
        <Navbar/>
        {children}
        <Box display={{xs: "none", sm: "none", md: "block"}}>
            <Footer/>
        </Box>
    </Box>
);

export default MainTemplate;