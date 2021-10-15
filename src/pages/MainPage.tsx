import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Feedback } from '../reducers/FeedbackReducer';
import PremiumAccessImage from '../components/PremiumAccessImage';
import ProductCard from '../components/ProductCard';
import FeedbackList from '../components/FeedbackList';
import UserCard from '../components/UserCard';
import MainTemplate from '../templates/MainTemplate';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}));

const MainPage: React.FC = () => {
  const classes = useStyles();

  return (
    <MainTemplate>
      <PremiumAccessImage />
      <div className={classes.root}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>

      <div>
        <div> Last feedbacks</div>
        <FeedbackList />
      </div>

      <div className={classes.root}>
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </MainTemplate>
  );
};
export default MainPage;
