import style from './Header.module.css'

export const Header = (props) => {
    return (
        <div className={style.header}>
            <div className={style.positions}>
                <div>{props.life}</div>
                <div>{props.nameApp}</div>
                <div>Length: {props.snakeLength}</div>
            </div>
        </div>
    )
}