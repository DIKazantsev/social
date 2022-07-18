import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/root'
import { composeWithDevTools } from '@redux-devtools/extension';


const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default function configureStore() {
    const store = createStore(
        rootReducer,
        composeWithDevTools(
            applyMiddleware()
            // other store enhancers if any
        )
    );
    return store
}
