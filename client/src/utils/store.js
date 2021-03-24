import { createStore } from 'redux';
import rootReducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const composedEnhancer = composeWithDevTools(
    // middleware here if necessary
)

const store = createStore(rootReducer, composedEnhancer);

export default store;