import React from 'react';
import { makeStyles, Theme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, Box } from '@material-ui/core';
import Navbar from './components/Navbar';
import theme from './theme/theme';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import MainTemplate from './templates/MainTemplate';
import PremiumAccessImage from './components/PremiumAccessImage';
import FeedbackCard from './components/FeedbackCard';
import UserCard from './components/UserCard';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainTemplate>

        <PremiumAccessImage />

        <div className={classes.root}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>

        <div className={classes.root}>
          <FeedbackCard />
          <FeedbackCard />
          <FeedbackCard />
        </div>

        <div className={classes.root}>
          <UserCard />
          <UserCard />
          <UserCard />
        </div>
      </MainTemplate>
    </ThemeProvider>
  );
};

export default App;
