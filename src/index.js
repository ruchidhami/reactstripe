import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import createHistory from 'history/createBrowserHistory'

import { ConnectedRouter, routerMiddleware } from 'react-router-redux'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Reducer
import reducer from './reducers'

// Click handler
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
// const middleware = routerMiddleware(history)
const middleware = [
  thunk,
  routerMiddleware(history),
];

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
        <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker();