const initialState = {
    image: ''
}

export default function meReducer (state= initialState, action) {
    switch (action.type) {
        case 'me/SET_IMAGE':
            return {
                image: action.payload
            }
        default: 
            return state;
    }
}