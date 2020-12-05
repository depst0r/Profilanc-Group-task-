import { combineReducers } from 'redux'
import newsReducer from './newsReducer'
import usersReducer from './usersReducer'

export default combineReducers({news: newsReducer, users: usersReducer})