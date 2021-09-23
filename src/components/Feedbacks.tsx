import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import FeedbackCard from './FeedbackCard';
import { StoreState } from '../store/store';
import { Feedback } from '../reducers/FeedbackReducer';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}));

interface Props {
    feedbacks: Feedback[]
}

const Feedbacks: React.FC<Props> = ({ feedbacks }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {feedbacks.map((feedback: Feedback) => <FeedbackCard key={feedback.id} feedback={feedback} />)}
    </div>
  );
};

const mapStateToProps = (state: StoreState) => {
  const { feedbacks } = state;
  return feedbacks;
};

export default connect(mapStateToProps)(Feedbacks);
