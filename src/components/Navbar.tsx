import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import {
  Box, Typography, Button, TextField,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import editIcon from '../assets/editIcon.svg';

const Navbar: React.FC = () => (
  <Box
    bgcolor="text.primary"
    position="static"
    data-testid="navbar"
  >
    <Toolbar color="textSecondary">
      <img src={editIcon} alt="logo" />
      <Typography
        color="textSecondary"
      >
        Navbar
      </Typography>
      <Link to="/user">
        <Button variant="contained">User</Button>
      </Link>
      <Link to="/add">
        <Button variant="contained">Add feedback</Button>
      </Link>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </Toolbar>
  </Box>
);

export default Navbar;
