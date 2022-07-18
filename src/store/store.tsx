import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/root'
import { composeWithDevTools } from '@redux-devtools/extension';
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../saga/rootSaga';


const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware()

export default function configureStore() {
    const store = createStore(
        rootReducer,
        composeWithDevTools(
            applyMiddleware(sagaMiddleware)
            // other store enhancers if any
        )

    );
    sagaMiddleware.run(rootSaga)
    return store
}


