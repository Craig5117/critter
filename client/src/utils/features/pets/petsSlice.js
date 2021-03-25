const initialState = {
    petTypes: [{_id: 123, name: "Dog"}, {_id: 456, name: "Cat"}, {_id: 789, name: "Fish"}],
    currentPetType: ''
}

export default function petsReducer(state = initialState, action) {
    switch (action.type) {
        case 'pets/UPDATE_CURRENT_TYPE': {
            return {
                ...state,
                currentPetType: action.payload
            }
        }
        // addPetType ?
        default: 
            return state;
    }
}