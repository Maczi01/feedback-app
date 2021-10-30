import { Box } from '@mui/material';
import { Theme, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  bar: {
    display: 'flex',
    width: '100%',
    height: '60px',
    padding: '20px',
    margin: '30px 0 10px 0',
    backgroundColor: theme.palette.text.primary,
    borderRadius: '10px',
  },
}));

const UserCommentInfo: React.FC = () => {
  const classes = useStyles();

  return (
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
  );
};

export default UserCommentInfo;
