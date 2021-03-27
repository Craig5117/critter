const initialState = {
    showPetFilter: false,
    showLoginSignup: false,
    showSearchBar: false,
}

export default function navReducer (state= initialState, action) {
    switch (action.type) {
        case "nav/SHOW_PET_FILTER":
            return;
        case "nav/SHOW_LOGIN_SIGNUP":
            return;
        case "nav/SHOW_SEARCH_BAR":
            return;
        default:
            return state
    }
}