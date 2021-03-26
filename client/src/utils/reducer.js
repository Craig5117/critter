import { combineReducers } from "redux";
import petsReducer from './features/pets/petsSlice';

const rootReducer = combineReducers({
    pets: petsReducer,
})

export default rootReducer;