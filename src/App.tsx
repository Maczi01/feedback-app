import React from 'react';
import Navbar from "./components/Navbar";
import {ThemeProvider} from "@material-ui/core/styles";
import theme from "./theme/theme";
import {CssBaseline} from "@material-ui/core";

const App = () => (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <div >
            <Navbar/>
            <p>
                Edit src/App.js and save to reload.
            </p>
            Learn React
        </div>
    </ThemeProvider>
);


export default App;
