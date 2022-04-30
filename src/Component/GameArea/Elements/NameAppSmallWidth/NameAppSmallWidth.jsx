import style from './NameAppSmallWidth.module.css';

export const NameAppSmallWidth = () => {
    return (
        <>
            <text className={style.nameApp} x={window.innerWidth / 2.2} y={window.innerHeight / 9}>C</text>
            <text className={style.nameApp} x={window.innerWidth / 2.2} y={window.innerHeight / 5.5}>A</text>
            <text className={style.nameApp} x={window.innerWidth / 2.2} y={window.innerHeight / 4}>T</text>
            <text className={style.nameApp} x={window.innerWidth / 2.2} y={window.innerHeight / 3.15}>E</text>
            <text className={style.nameApp} x={window.innerWidth / 2.2} y={window.innerHeight / 2.6}>R</text>
            <text className={style.nameApp} x={window.innerWidth / 2.2} y={window.innerHeight / 2.2}>P</text>
            <text className={style.nameApp} x={window.innerWidth / 2.1} y={window.innerHeight / 1.925}>I</text>
            <text className={style.nameApp} x={window.innerWidth / 2.2} y={window.innerHeight / 1.712}>L</text>
            <text className={style.nameApp} x={window.innerWidth / 2.2} y={window.innerHeight / 1.536}>L</text>
            <text className={style.nameApp} x={window.innerWidth / 2.2} y={window.innerHeight / 1.412}>A</text>
            <text className={style.nameApp} x={window.innerWidth / 2.2} y={window.innerHeight / 1.3}>R</text>
        </>
    )
}