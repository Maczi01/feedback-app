import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import progress from '../assets/progress.png';
import ProductImageWrapper from './ProductImageWrapper';
import { Feedback } from '../reducers/FeedbackReducer';

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
  },
  head: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 14,
    fontWeight: 700,
  },
  pos: {
    marginBottom: 12,
  },
}));

interface Props {
  feedback: Feedback
}

const FeedbackCard: React.FC<Props> = ({ feedback }) => {
  const {
    id, title, description, productId, userId, date, grade,
  } = feedback;

  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Box className={classes.bar} />
      <Box className={classes.head}>
        <Typography className={classes.body2}>
          {title}
        </Typography>
        <Typography className={classes.body1}>
          {date}
        </Typography>
      </Box>
      <Typography className={classes.body1}>
        {description}
      </Typography>
      <CardContent className={classes.content}>
        <Box className={classes.comments}>
          <Typography className={classes.body3}>
            {userId}
            {' '}
            about
            {' '}
            {productId}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default FeedbackCard;
