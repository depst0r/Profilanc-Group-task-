import { combineReducers } from 'redux'
import newsReducer from './reducer'
import usersReducer from './usersReducer'

export default combineReducers({news: newsReducer, users: usersReducer})