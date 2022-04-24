import style from './SnakeLength.module.css';

export const SnakeLength = (props) => {
    return (
        <div className={style.length}>Length: {props.snakeLength}</div>
    )
}