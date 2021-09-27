import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
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
    feedbacks: Feedback[]
    addItem: any
}

const FeedbackList: React.FC<Props> = ({ feedbacks, addItem }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        {/* eslint-disable-next-line max-len */}
        {feedbacks.map((feedback: Feedback) => <FeedbackCard key={feedback.id} feedback={feedback} />)}
      </div>
      <Button variant="contained" color="primary" onClick={addItem}>
        Click me
        {' '}
      </Button>
    </>
  );
};

const mapStateToProps = (state: StoreState) => {
  const { feedbacks } = state;
  return feedbacks;
};

const mapDispatchToProps = (dispatch: any) => ({
  addItem: () => dispatch(addItemAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackList);
