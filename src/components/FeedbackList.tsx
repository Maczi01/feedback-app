import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Dispatch } from 'redux';
import FeedbackCard from './FeedbackCard';
import { StoreState } from '../store/store';
import { Feedback } from '../reducers/FeedbackReducer';
import { addItem as addItemAction } from '../actions/FeedbackActions';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}));

interface Props {
    feedbacks: Feedback[],
}

const FeedbackList: React.FC<Props> = ({ feedbacks }) => {
  const classes = useStyles();
  console.log(feedbacks);
  return (
    <>
      <div className={classes.root}>
        {feedbacks
          .map((feedback: Feedback) => <FeedbackCard key={feedback.id} feedback={feedback} />)}
      </div>
    </>
  );
};

const mapStateToProps = (state: StoreState) => {
  const { feedbacks } = state;
  return feedbacks;
};

export default connect(mapStateToProps)(FeedbackList);
