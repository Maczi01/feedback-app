import React, { useState } from 'react';
import { Box } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button, TextField, Theme, Typography,
} from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import MainTemplate from '../templates/MainTemplate';
import PremiumAccessImage from '../components/PremiumAccessImage';
import UserInfoImage from '../components/UserInfoImage';
import Navbar from '../components/Navbar';
import editIcon from '../assets/editIcon.svg';
import UserCommentCard from '../components/UserCommentCard';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
  },
  bio: {
    display: 'flex',
    flexDirection: 'column',
    width: '550px',
    margin: '10px',
  },
  bar: {
    display: 'flex',
    width: '100%',
    height: '60px',
    padding: '20px',
    margin: '30px 0 10px 0',
    backgroundColor: theme.palette.text.primary,
    borderRadius: '10px',
  },
  comments: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',

  },
  commentCard: {
    width: '100%',
    height: '120px',
    padding: '20px',
    margin: '10px 0',
    backgroundColor: 'pink',
    borderRadius: '10px',
  },
  body2: {
    fontSize: 16,
    fontWeight: theme.typography.fontWeightBold,
    margin: '10px',
  },
  body1: {
    fontSize: 16,
    margin: '10px',
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

        <Box className={classes.bio}>
          <UserInfoImage />
        </Box>

        <Box className={classes.comments}>
          <Box
            className={classes.bar}
            bgcolor="text.primary "
            position="static"
            data-testid="navbar"
          >
            <Typography
              color="textSecondary"
            >
              Sort by

            </Typography>
            <Typography
              color="textSecondary"
            >
              Most relevant

            </Typography>
          </Box>
          <UserCommentCard />
          <UserCommentCard />
          <UserCommentCard />
        </Box>
      </Box>
    </MainTemplate>
  );
};
export default UserCommentsPage;
