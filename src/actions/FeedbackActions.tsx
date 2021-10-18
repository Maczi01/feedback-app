import { AddFeedbackAction, Feedback, RemoveFeedbackAction } from '../reducers/FeedbackReducer';

export const addItem = (feedback: Feedback): AddFeedbackAction => ({
  type: 'ADD_FEEDBACK',
  payload: feedback,
});

export const removeItem = (id: number): RemoveFeedbackAction => ({
  type: 'REMOVE_FEEDBACK',
  payload: feedbackone,
});

const feedbackone = {
  id: 3,
  title: 'Best chair ever',
  description: 'Nice chair for playing. Easy to assembly',
  productId: 3,
  userId: 2,
  date: '09.03.2019',
  grade: 5,
};
