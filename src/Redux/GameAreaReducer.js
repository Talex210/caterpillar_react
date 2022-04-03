const RIGHT = 'RIGHT';
const LEFT = 'LEFT';
const UP = 'UP';
const DOWN = 'DOWN';
const STOP = 'STOP';
const COLLISION = 'COLLISION';
const BUTTON_START_STOP = 'BUTTON_START_STOP';
const EAT_APPLE = 'EAT_APPLE';
const STOP_COLLISION = 'STOP_COLLISION';

let initialState = {
    width: Math.trunc(window.innerWidth / 100) * 100, // нужно разобраться, что бы игра не выходила за видимий экрна
    height: Math.trunc(window.innerHeight / 100) * 100,
    blockSize: 20,
    snake: {
        x: [12, 13, 14],
        y: [15, 15, 15]
    },
    apple: {
        x: 18,
        y: 13
    },
    direction: 'right',
    intervalStop: 0,
    isCollision: false,
    isStop: true,
    snakeLength: 3,
    life: 4,
    intervalCollision: 0
}

export const GameAreaReducer = (state = initialState, action) => {
    let widthInBlocks = Math.trunc(state.width / state.blockSize) - 1;
    let heightInBlocks = Math.trunc(state.height / state.blockSize) - 1;
    let headSnakeX = state.snake.x[state.snake.x.length - 1];
    let headSnakeY = state.snake.y[state.snake.y.length - 1];
    let bodySnakeX = state.snake.x.slice(0, state.snake.x.length - 1);
    let bodySnakeY = state.snake.y.slice(0, state.snake.y.length - 1);
    switch (action.type) {
        case RIGHT:
            return {
                ...state,
                snake: {
                    x: [...state.snake.x.slice(1, state.snake.x.length),
                        state.snake.x[state.snake.x.length - 1] + 1],
                    y: [...state.snake.y.slice(1, state.snake.y.length),
                        state.snake.y[state.snake.y.length - 1]]
                },
                direction: 'right'
            }
        case LEFT:
            return {
                ...state,
                snake: {
                    x: [...state.snake.x.slice(1, state.snake.x.length),
                        state.snake.x[state.snake.x.length - 1] - 1],
                    y: [...state.snake.y.slice(1, state.snake.y.length),
                        state.snake.y[state.snake.y.length - 1]]
                },
                direction: 'left'
            }
        case UP:
            return {
                ...state,
                snake: {
                    x: [...state.snake.x.slice(1, state.snake.x.length),
                        state.snake.x[state.snake.x.length - 1]],
                    y: [...state.snake.y.slice(1, state.snake.y.length),
                        state.snake.y[state.snake.y.length - 1] - 1]
                },
                direction: 'up'
            }
        case DOWN:
            return {
                ...state,
                snake: {
                    x: [...state.snake.x.slice(1, state.snake.x.length),
                        state.snake.x[state.snake.x.length - 1]],
                    y: [...state.snake.y.slice(1, state.snake.y.length),
                        state.snake.y[state.snake.y.length - 1] + 1]
                },
                direction: 'down'
            }
        case STOP:
            return {
                ...state,
                intervalStop: action.stop
            }
        case COLLISION:
            if (headSnakeX === 0 || headSnakeY === 0 || headSnakeX === widthInBlocks || headSnakeY === heightInBlocks) {
                return {
                    ...state,
                    isCollision: true,
                    life: state.life - 1
                }
            } else {
                for (let i = 0; i < bodySnakeX.length; i++) {
                    if (bodySnakeX[i] === headSnakeX && bodySnakeY[i] === headSnakeY) {
                        return {
                            ...state,
                            isCollision: true,
                            life: state.life - 1
                        }
                    }
                }
            }
            return state;
        case BUTTON_START_STOP:
            return {
                ...state,
                isStop: action.start_stop
            }
        case EAT_APPLE:
            if (headSnakeX === state.apple.x && headSnakeY === state.apple.y) {
                switch (state.direction) {
                    case 'right':
                        return {
                            ...state,
                            snakeLength: state.snakeLength + 1,
                            snake: {
                                x: [...state.snake.x.slice(0, state.snake.x.length),
                                    state.snake.x[state.snake.x.length - 1] + 1],
                                y: [...state.snake.y.slice(0, state.snake.y.length),
                                    state.snake.y[state.snake.y.length - 1]]
                            }
                        }
                    case 'left':
                        return {
                            ...state,
                            snakeLength: state.snakeLength + 1,
                            snake: {
                                x: [...state.snake.x.slice(0, state.snake.x.length),
                                    state.snake.x[state.snake.x.length - 1] - 1],
                                y: [...state.snake.y.slice(0, state.snake.y.length),
                                    state.snake.y[state.snake.y.length - 1]]
                            }
                        }
                    case 'up':
                        return {
                            ...state,
                            snakeLength: state.snakeLength + 1,
                            snake: {
                                x: [...state.snake.x.slice(0, state.snake.x.length),
                                    state.snake.x[state.snake.x.length - 1]],
                                y: [...state.snake.y.slice(0, state.snake.y.length),
                                    state.snake.y[state.snake.y.length - 1] - 1]
                            }
                        }
                    case 'down':
                        return {
                            ...state,
                            snakeLength: state.snakeLength + 1,
                            snake: {
                                x: [...state.snake.x.slice(0, state.snake.x.length),
                                    state.snake.x[state.snake.x.length - 1]],
                                y: [...state.snake.y.slice(0, state.snake.y.length),
                                    state.snake.y[state.snake.y.length - 1] + 1]
                            }
                        }
                    default:
                        return state;
                }
            }
            return state;
        case STOP_COLLISION:
            return {
                ...state,
                intervalCollision: action.stop
            }
        default:
            return state;
    }
}

export const moveRight = () => ({type: RIGHT});
export const moveLeft = () => ({type: LEFT});
export const moveUp = () => ({type: UP});
export const moveDown = () => ({type: DOWN});
export const setStop = (stop) => ({type: STOP, stop});
export const IsThereCollision = () => ({type: COLLISION});
export const setStartStop = (start_stop) => ({type: BUTTON_START_STOP, start_stop});
export const moveApple = () => ({type: EAT_APPLE});
export const setStopCollision = (stop) => ({type: STOP_COLLISION, stop});

window.initialState = initialState