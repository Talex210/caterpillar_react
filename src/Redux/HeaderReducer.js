let startState = {
    nameApp: 'Snake',
    life: 5,
    snakeLength: 3
}

export const headerReducer = (state = startState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}