import { MOVE_TO_NEXT_CARD } from '../actions/card'

export type State = {
  currentCardIndex: number
}

export const reducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case MOVE_TO_NEXT_CARD:
      return Object.assign({}, state, {
        currentCardIndex: state.currentCardIndex + 1,
      })
    default:
      return state
  }
}
