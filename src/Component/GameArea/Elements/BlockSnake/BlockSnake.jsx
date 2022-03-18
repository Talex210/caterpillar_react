import style from './BlockSnake.module.css';

export const BlockSnake = (props) => {
    return (
        <>
            {props.snake.x.map((x, i) =>
                <rect
                    className={i === props.snake.x.length - 1 ? style.head : i % 2 === 0 ? style.bodyEven : style.bodyOdd}
                    x={x * props.blockSize}
                    y={props.snake.y[i] * props.blockSize} width={props.blockSize}
                    height={props.blockSize} key={i}
                />
            )}
        </>
    )
}
