import initialState, {reducer} from "../reducers/reducer";
import { createReducer } from 'typesafe-actions';


const store = createStore(reducer)

export default store;