import React from 'react';
import {
  Box, CardMedia, makeStyles, Theme, Typography,
} from '@material-ui/core';
import ombre from '../assets/ombre.svg';

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    margin: '20px',
    overflow: 'hidden',
    borderRadius: '10px',
    height: '100%',
    position: 'relative',
  },
  media: {
    height: '100%',
    // width: '100%'
  },
  texts: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: theme.palette.text.secondary,
  },
}));

const PremiumAccessImage: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.card}>
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        title="Contemplative Reptile"
        src={ombre}
        className={classes.media}
      />
      <Typography component="div" className={classes.texts}>
        <Box fontSize={32} fontWeight="fontWeightBold">
          Read our premium reviews
        </Box>
        <Box fontSize={24} fontWeight="fontWeightMedium">
          Written by our experts
        </Box>
      </Typography>
    </Box>
  );
};

export default PremiumAccessImage;
