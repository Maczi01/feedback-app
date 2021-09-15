import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import glass from '../assets/glass.jpg';
import progress from '../assets/progress.png';
import commentIcon from '../assets/commentIcon.svg';
import ProductImageWrapper from './ProductImageWrapper';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '320px',
    margin: '20px',
  },
  bar: {
    height: '8px',
    backgroundColor: '#F49F85',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  comments: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  body3: {
    fontSize: 16,
    fontWeight: theme.typography.fontWeightBold,
    margin: '5px',
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
  wrapper: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: '10px',
    color: theme.palette.primary.dark,
    width: '100px',
    margin: '10px',
  },
  wrapper2: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: '10px',
    color: theme.palette.primary.dark,
    width: '100px',
    // margin: "10px",
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    fontWeight: 700,
  },
  pos: {
    marginBottom: 12,
  },
}));

const FeedbackCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Box className={classes.bar} />
      <CardContent className={classes.content}>
        <ProductImageWrapper src={progress} />
      </CardContent>
      <Typography className={classes.body2}>
        Amazing!
      </Typography>
      <Typography className={classes.body1}>
        Amazing quality in good price. I'm content! Very fast delivery and good contact
      </Typography>
      <CardContent className={classes.content}>
        <Box className={classes.comments}>
          <Typography className={classes.body3}>
            John about glass
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default FeedbackCard;
