import style from './SnakeLengthSmallWidth.module.css';

export const SnakeLengthSmallWidth = (props) => {
    return (
        <div className={style.length}>
            <div className={style.text}>Length:</div>
            <div className={style.number}>{props.snakeLength}</div>
        </div>
    )
}