import { combineReducers } from "redux";
import petsReducer from './features/pets/petsSlice';

const rootReducer = combineReducers({
    currentPetType: petsReducer,
})

export default rootReducer;