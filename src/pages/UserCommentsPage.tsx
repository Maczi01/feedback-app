import React, { useState } from 'react';
import { Box } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';
import MainTemplate from '../templates/MainTemplate';
import PremiumAccessImage from '../components/PremiumAccessImage';
import UserInfoImage from '../components/UserInfoImage';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',

  },
  bio: {
    display: 'flex',
    flexDirection: 'column',
  },
  comments: {
    padding: '20px',
    margin: '50px',
    backgroundColor: theme.palette.text.secondary,
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

const UserCommentsPage: React.FC = () => {
  const classes = useStyles();
  return (
    <MainTemplate>
      <Box className={classes.root}>
        Users comment page
        <Box className={classes.bio}>
          <UserInfoImage />
        </Box>
        <Box className={classes.comments} />

      </Box>
    </MainTemplate>
  );
};
export default UserCommentsPage;
