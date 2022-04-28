export const initialState = {
    token: null,
    team: [],
    detail: {},
}

export const actionsTypes = {
    GET_TOKEN: 'GET TOKEN',
    SET_TOKEN: 'SET TOKEN'
}

export default function StoreReducer(state, action) {
    switch(action.type){
        case actionsTypes.GET_TOKEN:
            let response = JSON.parse(localStorage.getItem('token'));
            return {
                ...state,
                token: response? response: state.token
            }
        case actionsTypes.SET_TOKEN:
            localStorage.setItem('token', JSON.stringify(action.payload));
            return {
                ...state,
                token: action.payload
            }
        default:
            return state
    }
}