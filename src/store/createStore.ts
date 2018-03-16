import { createStore, applyMiddleware, compose, Middleware } from 'redux'
import Logger from 'redux-logger'
import rootReducer from '../reducer/index'
// import createSagaMiddleware from 'redux-saga'
// import rootSaga from './sagas'
// const sagaMiddleware = createSagaMiddleware()
const middlewares: Middleware[] = []
middlewares.push(Logger)

let storeEnhancers = compose(applyMiddleware(...middlewares))

export default function configureStore(initialState: object = {}) {
  return createStore(rootReducer, initialState, storeEnhancers)
}
