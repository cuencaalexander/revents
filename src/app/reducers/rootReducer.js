import { combineReducers } from "redux";
import {reducer as FormReducer} from 'redux-form'
import testReducer from "../../features/testarea/testReducer";
import eventsReducer from "../../features/event/eventsReducer";

const rootReducer = combineReducers({
    form: FormReducer,
    test: testReducer,
    events: eventsReducer
})

export default rootReducer