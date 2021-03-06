import React from 'react';
import {
  Box, Container, Theme, Toolbar, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    minHeight: '64px',
  },
}));

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Box bgcolor="text.primary">
        <Container maxWidth="md">
          <Toolbar>
            <Typography variant="body1" color="textSecondary">
              Designed with 😺 by Mati
            </Typography>
          </Toolbar>
        </Container>
      </Box>
    </footer>
  );
};
export default Footer;
