import { ADD_NEWS, DELETE_NEWS } from '../Actions/actionTypes'

const initialNews = [
    {
        title: 'NEWS',
        date: '25.11.2020',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        completed: false
    },
    {
        title: 'NEWS__2',
        date: '26.11.2020',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        completed: false
    },
    {
        title: 'NEWS__3',
        date: '29.11.2020',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        completed: false
    },

]

const initialState = {
        news: '',
        id: '',
        

}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_NEWS:
                console.log('ADD', action.news)
            return {
                ...state,
                news: action.news,
                id: action.id,
            }
        default:
            return state
    }
}