import React from 'react';
import Navbar from "./components/Navbar";
import {makeStyles, Theme, ThemeProvider} from "@material-ui/core/styles";
import theme from "./theme/theme";
import {CssBaseline} from "@material-ui/core";
import Footer from "./components/Footer";
import {Box} from "@material-ui/core";
import ProductCard from "./components/ProductCard";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
}));

const App = () => {

    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Box bgcolor="#F2F4FF">
                <Navbar/>
                <div className={classes.root}>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </div>
                <Footer/>
            </Box>
        </ThemeProvider>
    );
}


export default App;
