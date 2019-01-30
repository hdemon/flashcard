import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { reducer as cardScreen } from './reducers/cardScreen'

const createRootReducer = (history: any) =>
  combineReducers({
    cardScreen,
    router: connectRouter(history),
  })

export default createRootReducer
