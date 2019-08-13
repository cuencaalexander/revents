import { combineReducers } from "redux";
import testReducer from "../../features/testarea/testReducer";
import eventsReducer from "../../features/event/eventsReducer";

const rootReducer = combineReducers({
    test: testReducer,
    events: eventsReducer
})

export default rootReducer