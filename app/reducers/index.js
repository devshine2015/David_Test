import { combineReducers } from 'redux';
import flavors from './flavors'

// Combine all the reducers
const rootReducer = combineReducers({
    flavors
})

export default rootReducer;