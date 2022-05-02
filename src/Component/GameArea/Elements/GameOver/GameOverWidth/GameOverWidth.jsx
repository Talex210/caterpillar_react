import style from './GameOverWidth.module.css';

export const GameOverWidth = (props) => {
    return (
        <>
            <text className={style.gameOver} x={props.width / 4.64} y={props.height / 1.77}>GAME OVER</text>
            <text className={style.text} x={props.width / 5.63} y={props.height / 1.5}>
                To start the game again, refresh the page.
            </text>
        </>
    )
}