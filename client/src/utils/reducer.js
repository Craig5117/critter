import { combineReducers } from "redux";
import navReducer from "./features/nav/navSlice";
import petsReducer from './features/pets/petsSlice';

const rootReducer = combineReducers({
    pets: petsReducer,
    nav: navReducer,
})

export default rootReducer;