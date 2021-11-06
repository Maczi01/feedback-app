import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Route } from 'react-router';
import theme from './theme/theme';
import ProductCard from './components/ProductCard';
import MainTemplate from './templates/MainTemplate';
import PremiumAccessImage from './components/PremiumAccessImage';
import UserCard from './components/UserCard';
import store from './store/store';
import FeedbackList from './components/FeedbackList';
import MainPage from './pages/MainPage';
import AddFeedbackPage from './pages/AddFeedbackPage';
import UserCommentsPage from './pages/UserCommentsPage';
import LoginPage from './pages/LoginPage';

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
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/add" component={AddFeedbackPage} />
            <Route path="/user" component={UserCommentsPage} />
            <Route path="/login" component={LoginPage} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
