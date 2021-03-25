const initialState = {
    currentPetType: '',
}

export default function petsReducer(state = initialState, action) {
    switch (action.type) {
        case 'pets/UPDATE_CURRENT_TYPE': {
            return {
                currentPetType: action.payload
            }
        }
        // addPetType ?
        default: 
            return state;
    }
}