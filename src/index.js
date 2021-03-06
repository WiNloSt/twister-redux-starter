import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { AppContainer } from 'react-hot-loader'
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'

import './styles/custom.scss'
import './styles/main.scss'
import App from './components/App'
import rootReducer from './reducers'
import { loadState, saveState } from './utils/localStorage'

const history = createBrowserHistory()
const preloadState = loadState()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  connectRouter(history)(rootReducer),
  preloadState,
  composeEnhancers(
    applyMiddleware(
      routerMiddleware(history),
      thunk
    )
  )
)

const createAuthSavingHandler = () => {
  let previousAuth = {}

  return () => {
    const auth = store.getState().auth
    if (auth !== previousAuth) {
      saveState({
        auth
      })
      previousAuth = auth
    }
  }
}

store.subscribe(createAuthSavingHandler())

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component history={history} />
      </Provider>
    </AppContainer>,
    document.getElementById('react-root'))
}

render(App)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App)
  })
  module.hot.accept('./reducers', () => {
    store.replaceReducer(rootReducer)
  })
}
