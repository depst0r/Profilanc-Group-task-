import { NAME, PASS } from './actionTypes'

export const pass = text => ({ type: PASS, text })
export const name = text => ({type: NAME, text})
