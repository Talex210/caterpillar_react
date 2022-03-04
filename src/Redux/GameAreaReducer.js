let initialState = {
    width: window.innerWidth,
    height: window.innerHeight,
    blockSize: 20,
    snack: {
        x: [],
        y: []
    }
}

export const GameAreaReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}