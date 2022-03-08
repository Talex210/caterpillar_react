const HEAD_IS_COLLISION = 'HEAD-IS-COLLISION';
const APPLE_IS_EAT = 'APPLE-IS-EAT';

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
    isCollision: false,
    isEat: false
}

export const GameAreaReducer = (state = initialState, action) => {
    switch (action.type) {
        case HEAD_IS_COLLISION:
            return {
                ...state,
                isCollision: action.isCollision
            }
        case APPLE_IS_EAT:
            return {
                ...state,
                isEat: action.isEat
            }
        default:
            return state;
    }
}

export const headIsCollision = (isCollision) => ({type: HEAD_IS_COLLISION, isCollision});
export const appleIsEat = (isEat) => ({type: APPLE_IS_EAT, isEat});

window.initialState = initialState