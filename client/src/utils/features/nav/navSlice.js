const initialState = {
    showPetFilter: false,
    showSearchBar: false,
}

export default function navReducer (state= initialState, action) {
    switch (action.type) {
        case "nav/SHOW_PET_FILTER":
            return {
                ...state,
                showPetFilter: action.payload 
            };
        case "nav/SHOW_SEARCH_BAR":
            return {
                ...state,
                showSearchBar: action.payload
            };
        default:
            return state;
    }
}