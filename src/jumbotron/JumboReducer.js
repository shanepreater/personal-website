const InitialState = {
    show: true
}

export const jumboReducer = (state = InitialState, action) => {
    if (action.type === "JUMBO/VISIBLE/HIDE") {
        return {
            ...state,
            show: false
        }
    }
    return {...state}
}

export const jumbotronSelector = state => {
    return state.jumbo.show
}