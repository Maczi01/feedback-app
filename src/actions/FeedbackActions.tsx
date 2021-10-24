import { AnyAction, Dispatch } from 'redux';
import {
  AddFeedbackAction, Feedback, RemoveFeedbackAction,
} from '../reducers/FeedbackReducer';

// export const addFeedback = (feedback: Feedback): AddFeedbackAction => ({
//   type: 'ADD_FEEDBACK',
//   payload: feedback,
// });
//
// export const removeItem = (id: number): RemoveFeedbackAction => ({
//   type: 'REMOVE_FEEDBACK',
//   payload: feedbackone,
// });

export const getFeedbackList = () => (dispatch: Dispatch) => {
  dispatch({
    type: 'FEEDBACKS_REQUEST',
  });
  const url = 'http://localhost:8000/feedbacks';
  fetch(url)
    .then((data) => data.json())
    .then((payload) => {
      dispatch({
        type: 'FEEDBACKS_SUCCESS',
        payload,
      });
      // TODO error handling
    });
};

export const addFeedback = (feedback: Feedback) => (dispatch: Dispatch) => {
  dispatch({
    type: 'ADD_FEEDBACK',
    payload: feedback,
  });
  const url = 'http://localhost:8000/feedbacks';
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(feedback),
  }).then((response) => {
    console.log(response);
  });
};
