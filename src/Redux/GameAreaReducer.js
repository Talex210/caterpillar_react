let initialState = {
    width: window.innerWidth,
    height: window.innerHeight,
    blockSize: 20,
    snake: {
        x: [10,11,12],
        y: [15,15,15]
    },
    apple: {
        x: 2,
        y: 2
    }
}

export const GameAreaReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}