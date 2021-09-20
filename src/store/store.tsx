import { combineReducers, createStore } from 'redux';
import { feedbacksReducer, initialState } from '../reducers/reducer';

const reducer = combineReducers({
  feedbacks: feedbacksReducer,
});

const store = createStore(reducer);

export default store;
