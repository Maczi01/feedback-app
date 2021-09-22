import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

type Props = {
    children: JSX.Element[] | JSX.Element
};

const useStyles = makeStyles(() => ({
  template: {
    width: '80vw',
    margin: '0 auto',
  },
}));
const MainTemplate: React.FC<Props> = ({ children }) => {
  const classes = useStyles();

  return (
    <Box bgcolor="#F2F4FF">
      <Navbar />
      <Box className={classes.template}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default MainTemplate;
