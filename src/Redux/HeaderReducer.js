// const PLUS_LENGTH = 'PLUS-LENGTH';

let initialState = {
    nameApp: 'Snake'
    // snakeLength: 7
}

export const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        /* case PLUS_LENGTH:
             return {
                 ...state,
                 snakeLength: action.changeLength
             }*/
        default:
            return state;
    }
}

/*
export const plusLength = (changeLength) => ({type: PLUS_LENGTH, changeLength});*/
