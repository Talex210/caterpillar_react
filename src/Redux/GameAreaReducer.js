

let initialState = {
    width: Math.trunc(window.innerWidth / 100) * 100, // ~ -20% наверное, нужно что бы все поля помещались в экран
    height: Math.trunc(window.innerHeight / 100) * 100, // ~ -20%
    blockSize: 20,
    snake: {
        x: [1, 2, 3],
        y: [15, 15, 15]
    },
    apple: {
        x: 3,
        y: 3
    },
    isCollision: false,
    isEat: false
}

export const GameAreaReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}



window.initialState = initialState