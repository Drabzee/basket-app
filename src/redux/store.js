import { createStore } from 'redux';
import rootReduxer from './reducers';

const store = createStore(rootReduxer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;