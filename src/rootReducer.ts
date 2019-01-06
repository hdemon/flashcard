import { combineReducers } from 'redux'
import * as CardScreen from './reducers/cardScreen'

export type RootState = {
  cardScreen: CardScreen.State
}

export const rootReducer = combineReducers({ cardScreen: CardScreen.reducer })
