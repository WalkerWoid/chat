import {PROFILE_UPDATE}
    from "actions/profileAction";
import update from
        "react-addons-update";

import {initialState}
    from "data/initialProfileState";

export const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_UPDATE: {
            return update(state, {
                [action.payload.engFieldName]: {
                    value: {
                        $set: action.payload.newValue
                    }
                }
            })
        }
        default:
            return state
    }
}