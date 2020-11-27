import { NAME, PASS } from '../Actions/actionTypes'

const initialState = {
    name: '',
    pass: '',

}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case NAME:
                console.log('NAME', action.name)
            return {
                ...state,
                name: action.name
            }
        case PASS:
            console.log('PASS', action.pass)
            return {
                ...state,
                pass: action.pass
            }
        default:
            return state
    }
}