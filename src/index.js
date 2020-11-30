import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import  reducer  from './Redux/Reducers/reducer'
import { BrowserRouter as Router } from 'react-router-dom'

const store = createStore(reducer, applyMiddleware(logger))

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Provider store={store}>
    <App />
    </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals()
