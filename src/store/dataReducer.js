const defaultState = {
    data: '',
}

const SET_DATA = 'SET_DATA'
const RESET_DATA = 'RESET_DATA'
const BACKSPACE_DATA = 'BACKSPACE_DATA'
const SET_INPUT_DATA = 'SET_INPUT_DATA'

export const dataReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_DATA:
            return {...state, data: state.data + action.payload}
        case RESET_DATA:
            return {...state, data: ''}
        case BACKSPACE_DATA:
            return {...state, data: state.data.substring(0, state.data.length - 1)}
        case SET_INPUT_DATA:
            return {...state, data: action.payload}
        default:
            return state
    }
}

export const setDataAction = (payload) => ({type: SET_DATA, payload})
export const resetDataAction = () => ({type: RESET_DATA})
export const backDataAction = () => ({type: BACKSPACE_DATA})
export const setInputAction = (payload) => ({type: SET_INPUT_DATA, payload})