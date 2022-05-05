export const initialState = {
    token: null,
    team: [],
    detail: {},
    search: []
}

export const actionsTypes = {
    GET_TOKEN: 'GET TOKEN',
    SET_TOKEN: 'SET TOKEN',
    LOGOUT: 'LOGOUT',
    SEARCH: 'SEARCH',
    ADD_TEAM: 'ADD TEAM',
    REMOVE_TEAM: 'REMOVE TEAM'
}

export default function StoreReducer(state, action) {
    switch(action.type){

        case actionsTypes.GET_TOKEN:
            let response = JSON.parse(localStorage.getItem('heroApp'));
            return {
                token: response? response.token: state.token,
                team: response? response.team: state.team,
                search: response? response.search: state.search,
                detail: state.detail
            }

        case actionsTypes.SET_TOKEN:
            localStorage.setItem('heroApp', JSON.stringify({...state, token: action.payload}));
            return {
                ...state,
                token: action.payload
            }

        case actionsTypes.LOGOUT:
            localStorage.setItem('heroApp', JSON.stringify({...state, token: null}));
            return {
                ...state,
                token: null
            }

        case actionsTypes.SEARCH:
            localStorage.setItem('heroApp', JSON.stringify({...state, search: action.payload}));
            return {
                ...state,
                search: action.payload
            }

        case actionsTypes.ADD_TEAM:
            let addTeam = [...state.team, action.payload];
            localStorage.setItem('heroApp', JSON.stringify({...state, team: addTeam}));
            return {
                ...state,
                team: addTeam
            }

        case actionsTypes.REMOVE_TEAM:
            let deleteTeam = state.team.filter(character => character.id !== action.payload);
            localStorage.setItem('heroApp', JSON.stringify({...state, team: deleteTeam}));
            return {
                ...state,
                team: deleteTeam
            }
            
        default:
            return state
    }
}