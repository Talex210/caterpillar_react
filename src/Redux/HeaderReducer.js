const MINUS_LIFE = 'MINUS-LIFE';
const PLUS_LENGTH = 'PLUS-LENGTH';

let initialState = {
    nameApp: 'Snake',
    life: 3,
    snakeLength: 3
}

export const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case MINUS_LIFE:
            return {
                ...state,
                life: action.changeLife
            }
        case PLUS_LENGTH:
            return {
                ...state,
                snakeLength: action.changeLength
            }
        default:
            return state;
    }
}

export const minusLife = (changeLife) => ({type: MINUS_LIFE, changeLife});
export const plusLength = (changeLength) => ({type: PLUS_LENGTH, changeLength});