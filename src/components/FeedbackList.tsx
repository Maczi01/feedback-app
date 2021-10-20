import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core';
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

interface Props {
    feedbacks: Feedback[],
    getFeedbacks: any
}

const FeedbackList: React.FC<Props> = ({ feedbacks, getFeedbacks }) => {
  const classes = useStyles();
  useEffect(() => {
    getFeedbacks();
  }, []);

  return (
    <>
      <div className={classes.root}>
        {feedbacks && feedbacks
          .map((feedback: Feedback) => <FeedbackCard key={feedback.id} feedback={feedback} />)}
      </div>
    </>
  );
};

const mapStateToProps = (state: StoreState) => {
  const { feedbacks } = state;
  return feedbacks;
};

const mapDispatchToProps = (dispatch: any) => ({
  getFeedbacks: () => dispatch(getFeedbackList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackList);
