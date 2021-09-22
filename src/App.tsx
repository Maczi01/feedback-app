import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { Provider, connect } from 'react-redux';
import theme from './theme/theme';
import ProductCard from './components/ProductCard';
import MainTemplate from './templates/MainTemplate';
import PremiumAccessImage from './components/PremiumAccessImage';
import FeedbackCard from './components/FeedbackCard';
import UserCard from './components/UserCard';
import store from './store/store';
import { Feedback } from './reducers/reducer';
import ConnectedFeedback from './components/Feedbacks';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}));

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainTemplate>
          <PremiumAccessImage />
          <div className={classes.root}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>

          <ConnectedFeedback />

          <div className={classes.root}>
            <UserCard />
            <UserCard />
            <UserCard />
          </div>
        </MainTemplate>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
