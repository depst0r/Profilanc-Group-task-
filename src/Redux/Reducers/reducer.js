const initialState = {
    name: '',
    pass: '',

}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'name':
                console.log('name', action.data)
            return {
                ...state,
                name: action.data
            }
        case 'pass':
            console.log('pass', action.data)
            return {
                ...state,
                pass: action.data
            }
        default:
            return state
    }
}