import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import anne from '../assets/anne.jpg';
import ProductImageWrapper from './ProductImageWrapper';

const useStyles = makeStyles((theme: Theme) => ({
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
}));

const UserCommentCard: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.commentCard}>
      <Typography className={classes.body2}>
        Very nice kettel
      </Typography>
      <Typography className={classes.body1}>
        Useful, low energy consumption, good price.
      </Typography>
      {' '}
    </Box>
  );
};

export default UserCommentCard;
