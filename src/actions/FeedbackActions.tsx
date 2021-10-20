import { Dispatch } from 'redux';
import { AddFeedbackAction, Feedback, RemoveFeedbackAction } from '../reducers/FeedbackReducer';

export const addFeedback = (feedback: Feedback): AddFeedbackAction => ({
  type: 'ADD_FEEDBACK',
  payload: feedback,
});

export const removeItem = (id: number): RemoveFeedbackAction => ({
  type: 'REMOVE_FEEDBACK',
  payload: feedbackone,
});

export const getFeedbackList = () => (dispatch: Dispatch) => {
  dispatch({
    type: 'FEEDBACKS_REQUEST',
  });
  const url = 'http://localhost:8000/feedbacks';
  return fetch(url)
    .then((data) => data.json())
    .then((payload) => {
      dispatch({
        type: 'FEEDBACKS_SUCCESS',
        payload,
      });
    });
};

const feedbackone = {
  id: 3,
  title: 'Best chair ever',
  description: 'Nice chair for playing. Easy to assembly',
  productId: 3,
  userId: 2,
  date: '09.03.2019',
  grade: 5,
};
