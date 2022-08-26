const weatherAppReducer = (state,action) => {
    switch(action.type) {
        case "GET_CITY":
            return {
                ...state,
                currentCity: action.payload
            }
        default:
            return state
    }
}

export default weatherAppReducer