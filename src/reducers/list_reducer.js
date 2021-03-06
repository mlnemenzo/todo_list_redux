import types from '../actions/types';

const DEFAULT_STATE = {
    all: [],
    single: {}
};

export default (state = DEFAULT_STATE, action) => {
    console.log('Action:', action);
    switch(action.type) {
        case types.GET_LIST_DATA:
            console.log('Action:', action);
            return {...state, all: action.payload.data.todos};
        case types.GET_SINGLE_ITEM:
        case types.TOGGLE_ITEM:
            console.log("TOGGLE COMPLETE ACTION: ", action)
            return {...state, single: action.payload.data.todo};  
        case types.CLEAR_SINGLE_ITEM:
            return {...state, single: {}}
        default:   
            return state;
    }
}



