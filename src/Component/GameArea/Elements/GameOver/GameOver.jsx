import style from './GameOver.module.css';

export const GameOver = (props) => {
    return (
        <>
            <text x={props.width * 0.4 / 2} y={props.height * 1.1 / 2} className={style.gameOver}>GAME OVER</text>
            <text x={props.width * 0.4 / 2} y={props.height * 1.3 / 2} className={style.text}>
                To start the game again, refresh the page.
            </text>
        </>
    )
}