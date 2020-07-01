import { createStore } from 'redux';

import rootReducer from './rootReducer';
import { loadState } from './localStorage';

const persistedState = loadState();
const store = createStore(rootReducer,persistedState);

export default store;