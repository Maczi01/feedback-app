import { combineReducers, createStore } from 'redux';
import { feedbackReducer } from '../reducers/FeedbackReducer';

const reducer = combineReducers({
  feedbacks: feedbackReducer,
});

const store = createStore(reducer);
export type StoreState = ReturnType<typeof store.getState>;

export default store;
