import React, { useState } from 'react';
import { Box } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';
import MainTemplate from '../templates/MainTemplate';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',

  },
  userInfo: {
    display: 'flex',
    flexDirection: 'column',

  },
  form: {
    padding: '20px',
    margin: '50px',
    backgroundColor: theme.palette.text.secondary,
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: '20px',
    margin: '10px 50px',
    borderRadius: '10px',
  },
  field: {
    margin: '20px',
    padding: '10px',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  photo: {
    width: '180px',
    margin: '20px',
    padding: '10px',
  },
}));

const UserCommentsPage: React.FC = () => (
const classes = useStyles();
  <MainTemplate>
    <Box className={classes.root}>
      Users comment page
    </Box>
  </MainTemplate>
);

export default UserCommentsPage;
