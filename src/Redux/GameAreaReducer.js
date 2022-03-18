let initialState = {
    width: Math.trunc(window.innerWidth / 100) * 100, // нужно разобраться, что бы игра не выходила за видимий экрна
    height: Math.trunc(window.innerHeight / 100) * 100,
    blockSize: 20,
    snake: {
        x: [1, 2, 3, 4, 4, 4],
        y: [15, 15, 15, 15, 16, 17]
    },
    apple: {
        x: 3,
        y: 3
    },
    direction: 'right'
}

export const GameAreaReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}


window.initialState = initialState