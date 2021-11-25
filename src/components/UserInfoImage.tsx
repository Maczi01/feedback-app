import React from 'react';
import {
  Box, CardMedia, makeStyles, Theme, Typography,
} from '@material-ui/core';
import ombre from '../assets/ombre.svg';
// import image-elijah from '../assets/user-images/image-elijah.svg';
import elijah from '../assets/user-images/image-elijah.jpg';

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

const UserInfoImage: React.FC = () => {
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
        <Box fontSize={24} fontWeight="fontWeightMedium">
          User info
        </Box>
        <Box fontSize={12} fontWeight="fontWeightMedium">
          user name
        </Box>
        <Box fontSize={12} fontWeight="fontWeightMedium">
          user email
        </Box>
      </Typography>
    </Box>
  );
};

export default UserInfoImage;
