export const PROFILE_UPDATE = 'PROFILE_UPDATE'

export const profileUpdateAction = ({newValue, engFieldName}) => {
    return {
        type: PROFILE_UPDATE,
        payload: {newValue, engFieldName}
    }
}