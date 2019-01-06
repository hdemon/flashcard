import * as React from 'react'
import { Provider } from 'react-redux'
import { configureStore } from '../configureStore'
import { initialState } from '../initialState'
import CardScreen from '../components/CardScreen'

const store = configureStore(initialState)

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <CardScreen />
      </Provider>
    )
  }
}
