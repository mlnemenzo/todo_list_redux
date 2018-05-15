import { combineReducers } from 'redux';
import ListReducer from './list_reducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    list: ListReducer,
    form: formReducer
});