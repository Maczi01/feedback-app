import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Box} from "@material-ui/core";

const Navbar = () => {
    return (
        <Box bgcolor="text.primary" position="static">
            <Toolbar>Navbar</Toolbar>
        </Box>
    );
};

export default Navbar;