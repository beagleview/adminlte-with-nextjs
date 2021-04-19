import { combineReducers } from 'redux';
import authReducer from './authen.reducer';

const rootReducer = combineReducers({
    authReducer,
});

export default rootReducer;