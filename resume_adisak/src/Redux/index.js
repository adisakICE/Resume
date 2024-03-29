import { createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducers';
import logger from 'redux-logger'
export default function configureStore() {
    return createStore(
      rootReducer,
      applyMiddleware(thunk,logger)
    );
}