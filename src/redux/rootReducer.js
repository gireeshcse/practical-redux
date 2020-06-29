import { combineReducers } from 'redux';
import { createReducer } from 'redux-orm';
import orm from './orm';

const rootReducer = combineReducers({
    orm: createReducer(orm),
    // any other reducers
})

export default rootReducer;
