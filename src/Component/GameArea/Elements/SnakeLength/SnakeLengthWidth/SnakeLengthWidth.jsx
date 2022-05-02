import style from './SnakeLengthWidth.module.css';

export const SnakeLengthWidth = (props) => {
    return (
        <div className={style.length}>Length: {props.snakeLength}</div>
    )
}