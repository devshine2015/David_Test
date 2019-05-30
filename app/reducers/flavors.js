import _ from 'lodash'
import {
    GET_FLAVORS_SUCCESS,
    API_LOADING
} from '../constants/actionTypes';

const initialState = {
   flavors: [],
   isLoading: false,
};

const reducer = (state = initialState, action) => {
    let newState = _.cloneDeep(state);
    
    switch(action.type) {
        case API_LOADING:
            newState.isLoading = true;
            return newState;
        case GET_FLAVORS_SUCCESS:
            newState.isLoading = false;
            newState.flavors = action.result;
            return newState;
        default:
            return state;
    }
};

export default reducer;