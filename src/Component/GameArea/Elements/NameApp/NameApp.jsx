import style from './NameApp.module.css';

export const NameApp = (props) => {
    return (
        <>
            <text className={style.nameApp} x={props.width * 0.3 / 2} y={props.height * 1.2 / 2}>CATERPILLAR</text>
        </>
    )
}