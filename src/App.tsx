import React from 'react';
import Navbar from "./components/Navbar";
import {ThemeProvider} from "@material-ui/core/styles";
import theme from "./theme/theme";
import {CssBaseline} from "@material-ui/core";
import Footer from "./components/Footer";
import {Box, Typography, Button, TextField} from "@material-ui/core";
import ProductCard from "./components/ProductCard";

const App = () => (
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Box bgcolor="#F2F4FF" >
            <Navbar/>
            <p>
                Edit src/App.js and save to reload.
            </p>
            <ProductCard/>
            <Footer/>
        </Box>
    </ThemeProvider>
);


export default App;
