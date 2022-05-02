import style from './GameOverSmallWidth.module.css';

export const GameOverSmallWidth = (props) => {
    return (
        <>
            <text className={style.gameOver} x={props.width / 14} y={props.height / 1.9}>GAME OVER</text>
            <text className={style.text} x={props.width / 13} y={props.height / 1.75}>
                To start the game again, refresh the page.
            </text>
        </>
    )
}