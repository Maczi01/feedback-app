import { Action } from '../reducers/FeedbackReducer';

const someExampleFeedback = {
  id: 3,
  title: 'Best chair ever',
  description: 'Nice chair for playing. Easy to assembly',
  productId: 3,
  userId: 2,
  date: '09.03.2019',
  grade: 5,
};

export const addItem = (): Action => ({
  type: 'ADD_ITEM',
  payload: someExampleFeedback,
});

export const removeItem = (id: number): Action => ({
  type: 'REMOVE_ITEM',
  id:
});
