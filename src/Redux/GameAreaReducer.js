const HEAD_IS_COLLISION = 'HEAD-IS-COLLISION';

let initialState = {
    width: Math.trunc(window.innerWidth / 100) * 100,
    height: Math.trunc(window.innerHeight / 100) * 100,
    blockSize: 20,
    snake: {
        x: [1, 2, 3],
        y: [15, 15, 15]
    },
    apple: {
        x: 2,
        y: 2
    },
    isCollision: false
}

export const GameAreaReducer = (state = initialState, action) => {
    switch (action.type) {
        case HEAD_IS_COLLISION:
            return {
                ...state,
                isCollision: action.isCollision
            }
        default:
            return state;
    }
}

export const headIsCollision = (isCollision) => ({type: HEAD_IS_COLLISION, isCollision})

window.initialState = initialState