import { createBrowserHistory } from 'history'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './rootReducer'

const loggerMiddleware = createLogger()

export const history = createBrowserHistory()

// https://github.com/zalmoxisus/redux-devtools-extension#usage
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default function configureStore(preloadedState?: any) {
  return createStore(
    createRootReducer(history),
    preloadedState,
    composeEnhancers(
      applyMiddleware(
        routerMiddleware(history),
        thunkMiddleware,
        loggerMiddleware
      )
    )
  )
}
