import { combineReducers } from 'redux';
import {registration} from './registrationReducers'


const rootReducer = combineReducers({
    registration
});

export default rootReducer;