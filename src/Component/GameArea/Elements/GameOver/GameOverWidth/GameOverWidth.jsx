import style from './GameOverWidth.module.css';

export const GameOverWidth = () => {
    return (
        <>
            <text x={window.innerWidth / 4.7} y={window.innerHeight / 2.2} className={style.gameOver}>GAME OVER</text>
            <text x={window.innerWidth / 5.8} y={window.innerHeight / 1.8} className={style.text}>
                To start the game again, refresh the page.
            </text>
        </>
    )
}