import style from './GameOverSmallWidth.module.css';

export const GameOverSmallWidth = () => {
    return (
        <>
            <text x={window.innerWidth / 14} y={window.innerHeight / 2.25} className={style.gameOver}>GAME OVER</text>
            <text x={window.innerWidth / 13} y={window.innerHeight / 2.1} className={style.text}>
                To start the game again, refresh the page.
            </text>
        </>
    )
}