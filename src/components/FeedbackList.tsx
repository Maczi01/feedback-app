import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import { AnyAction, Dispatch } from 'redux';
import FeedbackCard from './FeedbackCard';
import { StoreState } from '../store/store';
import { Feedback } from '../reducers/FeedbackReducer';
import { getFeedbackList } from '../actions/FeedbackActions';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}));

const mapStateToProps = (state: StoreState) => {
  const { feedbacks } = state;
  return feedbacks;
};

const mapDispatchToProps = (dispatch: any) => ({
  getFeedbacks: () => dispatch(getFeedbackList()),
});
// const connector = connect(mapStateToProps, mapDispatchToProps);

// type PropsFromRedux = ConnectedProps<typeof connector>

interface Props {
    feedbacks: Feedback[],
    getFeedbacks: () => void
}

const FeedbackList: React.FC<Props> = ({ feedbacks, getFeedbacks }) => {
  const classes = useStyles();
  useEffect(() => {
    getFeedbacks();
  }, []);
  console.log(feedbacks);

  return (
    <>
      <div className={classes.root}>
        {feedbacks && feedbacks
          .map((feedback: Feedback) => <FeedbackCard key={feedback.id} feedback={feedback} />)}
      </div>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackList);

// https://redux.js.org/usage/usage-with-typescript : Typing the connect higher order component
