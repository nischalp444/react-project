const initialState = []

const commonIngridients = (state = initialState, action) => {
    switch (action.type) {
        case "GET_INGRIDIENTS":
            return (state = action.payload)
        default:
            return state
    }
}

export default initialState