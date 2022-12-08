const defaultState = {
    theme: 'dark',
}

const SET_THEME = 'SET_THEME'

export const themeReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_THEME:
            return {...state, theme: action.payload}
        default:
            return state
    }
}

export const setThemeAction = (payload) => ({type: SET_THEME, payload})