import style from './NameApp.module.css';

export const NameApp = () => {
    return (
        <>
            <text className={style.nameApp} x={window.innerWidth / 8.5} y={window.innerHeight / 2.1}>CATERPILLAR</text>
        </>
    )
}