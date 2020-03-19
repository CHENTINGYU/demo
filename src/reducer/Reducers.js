import {combineReducers} from "redux";
import homeReducer from "./homeReducer"
import settingReducer from "./settingReducer"


export default  combineReducers({
    homeReducer,
    settingReducer
})