import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import anne from '../assets/anne.jpg';
import ProductImageWrapper from './ProductImageWrapper';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '320px',
    margin: '20px',
  },
  bar: {
    height: '8px',
    backgroundColor: '#62BCFA',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
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
  },
  body1: {
    fontSize: 16,
    margin: '10px',
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userDetails: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
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
    height: '25px',
    margin: '2px',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
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

const UserCard: React.FC = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Box className={classes.bar} />

      <CardContent className={classes.content}>
        <Box className={classes.userInfo}>
          <ProductImageWrapper src={anne} />
          <Typography>Anna</Typography>
        </Box>
        <Box className={classes.info}>
          <Box className={classes.userDetails}>
            <Typography>Most feedbacks in</Typography>
            <Box className={classes.wrapper2}>
              <Typography className={classes.body2}>Home</Typography>
            </Box>
          </Box>

          <Box className={classes.userInfo}>
            <Typography>Reviews</Typography>
            <Typography>62</Typography>
          </Box>

          <Box className={classes.userInfo}>
            <Typography>Opinions</Typography>
            <Typography>121</Typography>
          </Box>

          <Box className={classes.userInfo}>
            <Typography>Comments</Typography>
            <Typography>753</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default UserCard;
