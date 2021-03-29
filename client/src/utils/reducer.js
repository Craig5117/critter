import { combineReducers } from "redux";
import meReducer from "./features/me/meSlice";
import navReducer from "./features/nav/navSlice";
import petsReducer from './features/pets/petsSlice';

const rootReducer = combineReducers({
    pets: petsReducer,
    nav: navReducer,
    me: meReducer,
})

export default rootReducer;