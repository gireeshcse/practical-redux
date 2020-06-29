import { combineReducers } from 'redux';
import { entitiesReducer } from './entitiesReducer';

const rootReducer = combineReducers({
    entities: entitiesReducer,
    // any other reducers
})

export default rootReducer;
