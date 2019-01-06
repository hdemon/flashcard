import { MOVE_TO_NEXT_CARD } from '../actions/card'

export type State = {
  currentCardIndex: number
}

export const reducer = (state = {}, action: any) => {
  switch (action.type) {
    case MOVE_TO_NEXT_CARD:
      return state
    // return action.subreddit
    default:
      return state
  }
}
