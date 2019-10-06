import {combineReducers} from 'redux'
import {authReducer} from "./authentication/AuthReducer";
import {jumboReducer} from "./jumbotron/JumboReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    jumbo: jumboReducer
})

export default rootReducer