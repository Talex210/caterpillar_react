// import style from './BlockSnake.module.css';

export const BlockSnake = (props) => {
    return (
        <>
            {props.snake.x.map((x, i) =>
                <rect x={x * props.blockSize} y={props.snake.y[i] * props.blockSize} width={props.blockSize}
                      height={props.blockSize} key={i}/>
            )}
        </>
    )
}
