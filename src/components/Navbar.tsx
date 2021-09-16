import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import {
  Box, Typography, Button, TextField,
} from '@material-ui/core';
import bulb from '../assets/bulb.svg';

const Navbar = () => (
  <Box
    bgcolor="text.primary"
    position="static"
    data-testid="navbar"
  >
    <Toolbar color="textSecondary">
      <img src={bulb} alt="logo" />
      <Typography
        color="textSecondary"
      >
        Navbar
      </Typography>
      <Button variant="contained">Default</Button>
      <Button variant="contained">Default</Button>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </Toolbar>
  </Box>
);

export default Navbar;
