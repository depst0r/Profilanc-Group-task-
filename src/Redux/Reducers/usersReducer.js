import { USER_NAME, USER_PASS } from '../Actions/actionTypes'

const initialState = [
    {
        userName: 'Гость',
        userPass: ''
    }
]

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case USER_NAME:
            return state.map(name => name.userName)
        case USER_PASS:
            return state.map(pass => pass.userPass)
        default:
            return state
    }
}