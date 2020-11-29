import { ADD_NEWS, REMOVE_NEWS, TOGGLE_NEWS } from './actionTypes'

export const addNews = text => ({ type: ADD_NEWS, text })
export const removeNews = index => ({type: REMOVE_NEWS, index})
export const toggleNews = index => ({type: TOGGLE_NEWS, index})
