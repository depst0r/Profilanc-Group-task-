import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import  reducer  from './Redux/reducer'
import { BrowserRouter as Router } from 'react-router-dom'

const store = createStore(reducer)

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
