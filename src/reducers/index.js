import { combineReducers } from 'redux';
import ListReducer from './list_reducer';

export default combineReducers({
    list: ListReducer
});