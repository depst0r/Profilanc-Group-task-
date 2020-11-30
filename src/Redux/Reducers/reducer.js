import { ADD_NEWS, TOGGLE_NEWS, REMOVE_NEWS } from '../Actions/actionTypes'

const initialState = {
    news: [
    {
        id: 1,
        title: 'NEWS',
        date: '25.11.2020',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        completed: false
    },
    {
        id: 2,
        title: 'NEWS__2',
        date: '26.11.2020',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        completed: true
    },
    {
        id: 3,
        title: 'NEWS__3',
        date: '29.11.2020',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        completed: false
    },
    ]
}

export default function reducer(state = initialState, action) {
    let newsList
    switch (action.type) {
        case ADD_NEWS:
            console.log('ADD', newsList)
            newsList = [...state]
            newsList.push(action.payload)
            return newsList
        case TOGGLE_NEWS:
            return state.map((news, index) => {
                if (index === action.index) {
                    return {
                        ...news,
                        completed: !news.completed
                    }
                }
            })
        case REMOVE_NEWS:
            newsList = [...state]
            newsList = newsList.filter(res => res.id !== action.payload)
            return newsList
        default:
            return state
    }
}