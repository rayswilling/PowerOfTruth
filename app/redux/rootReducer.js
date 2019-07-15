// Description: Root Reducer - Updated

import { combineReducers } from 'redux';

import { reducer as homeReducer } from "../modules/headlinesPage"

// Combine all the reducers
const rootReducer = combineReducers({ homeReducer });

export default rootReducer;