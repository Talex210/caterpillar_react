import style from './SnakeLength.module.css';

export const SnakeLength = (props) => {
    return (
        <div className={props.width <= 600 ? style.length_smallWidth : style.length}>Length: {props.snakeLength}</div>
    )
}