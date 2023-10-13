import {combineReducers}
    from "redux";
import {ChatReducer}
    from "reducers/chatReducer";
import {ProfileReducer}
    from "reducers/profileReducer";

export const rootReducer = combineReducers({
    chat: ChatReducer,
    profile: ProfileReducer
})