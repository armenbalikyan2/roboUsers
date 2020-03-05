import { combineReducers } from 'redux';
import arrayReducer from './users.reducer';


export const rootReducer = combineReducers({
    users: arrayReducer,
});

export default rootReducer;