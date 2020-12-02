import { combineReducers } from 'redux'
import { newsReducer } from './newsReducerucer'

export default combineReducers({news: newsReducer})