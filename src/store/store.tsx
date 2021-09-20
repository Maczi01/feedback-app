import { combineReducers, createStore } from 'redux';
import { rootReducer } from '../reducers/reducer';

const reducer = combineReducers({
  feedbacks: rootReducer,
});

const store = createStore(reducer);

export default store;
