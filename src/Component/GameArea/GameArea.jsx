import style from './GameArea.module.css'

export const GameArea = () => {
    const viewBox = [0, 0, window.innerWidth, window.innerHeight];
    return (
        <div className={style.gameArea}>
            <svg className={style.canvas}
                 id='gameAreaCanvas'
                // preserveAspectRatio='xMaxYMax'
                viewBox={viewBox}>
                <circle cx={50} cy={50} r={10}/>
            </svg>
        </div>
    )
}