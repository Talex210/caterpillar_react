import style from './BlockSnake.module.css';

export const BlockSnake = (props) => {
    return (
        <>
            {props.snake.x.map((x, i) =>
                <circle
                    className={i === props.snake.x.length - 1 ? style.head : i % 2 === 0 ? style.bodyEven : style.bodyOdd}
                    cx={x * props.blockSize  + props.blockSize / 2}
                    cy={props.snake.y[i] * props.blockSize  + props.blockSize / 2}
                    width={props.blockSize}
                    height={props.blockSize} r={props.blockSize / 2} key={i}
                />
            )}
        </>
    )
}
