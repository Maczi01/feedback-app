import React from 'react';
import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Theme } from '@material-ui/core';
import MainTemplate from '../templates/MainTemplate';
import UserInfoImage from '../components/UserInfoImage';
import UserCommentCard from '../components/UserCommentCard';
import UserCommentInfo from '../components/UserCommentInfo';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
  },
  bio: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    margin: '10px',
  },
  categories: {
    display: 'flex',
    flexDirection: 'column',
    margin: '10px 20px',
    backgroundColor: theme.palette.text.primary,
    borderRadius: '10px',
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
  buttonsGroup: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
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
          <UserCommentInfo />
          <UserCommentCard />
          <UserCommentCard />
          <UserCommentCard />
        </Box>
      </Box>
    </MainTemplate>
  );
};
export default UserCommentsPage;
