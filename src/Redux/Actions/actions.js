import { ADD_NEWS, REMOVE_NEWS, TOGGLE_NEWS, USER_NAME, USER_PASS } from './actionTypes'

export const addNews = text => ({ type: ADD_NEWS, payload: text })
export const removeNews = newsId => ({ type: REMOVE_NEWS, payload: newsId })
export const toggleNews = newsId => ({ type: TOGGLE_NEWS, payload: newsId })
export const userName = name => ({ type: USER_NAME, payload: name })
export const userPass = pass => ({ type: USER_PASS, payload: pass })
