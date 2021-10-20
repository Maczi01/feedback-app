import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { feedbackReducer } from '../reducers/FeedbackReducer';

const reducer = combineReducers({
  feedbacks: feedbackReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));
export type StoreState = ReturnType<typeof store.getState>;

export default store;
