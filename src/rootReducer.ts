import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import * as CardScreen from './reducers/cardScreen'

export type RootState = {
  cardScreen: CardScreen.State
}

const createRootReducer = (history: any) =>
  combineReducers({
    router: connectRouter(history),
    cardScreen: CardScreen.reducer,
  })

export default createRootReducer
