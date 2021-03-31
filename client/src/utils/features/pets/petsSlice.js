const initialState = {
    
    petTypes: [],
    currentPetType: '',
    currentPetName: ''
}
// petsList: [],

export default function petsReducer(state = initialState, action) {
    switch (action.type) {
        case 'pets/UPDATE_CURRENT_TYPE': {
            return {
                ...state,
                currentPetType: action.payload
            }
        }
        case 'pets/UPDATE_CURRENT_NAME': {
            return {
                ...state,
                currentPetName: action.payload
            }
        }
        case 'pets/UPDATE_PET_TYPES': {
            return {
                ...state,
                petTypes: [...action.payload]
            }
        }
        // case 'pets/UPDATE_PETS': {
        //    return {
        //         ...state,
        //         petsList: [...action.payload]
        //    } 
        // }
        // addPetType ?
        default: 
            return state;
    }
}