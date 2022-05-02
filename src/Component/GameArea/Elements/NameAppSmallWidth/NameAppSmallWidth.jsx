import style from './NameAppSmallWidth.module.css';

export const NameAppSmallWidth = (props) => {
    return (
        <>
            <text className={style.nameApp} x={props.width / 2.2} y={props.height / 7}>C</text>
            <text className={style.nameApp} x={props.width / 2.2} y={props.height / 4.55}>A</text>
            <text className={style.nameApp} x={props.width / 2.2} y={props.height / 3.35}>T</text>
            <text className={style.nameApp} x={props.width / 2.2} y={props.height / 2.65}>E</text>
            <text className={style.nameApp} x={props.width / 2.2} y={props.height / 2.175}>R</text>
            <text className={style.nameApp} x={props.width / 2.2} y={props.height / 1.85}>P</text>
            <text className={style.nameApp} x={props.width / 2.13} y={props.height / 1.612}>I</text>
            <text className={style.nameApp} x={props.width / 2.2} y={props.height / 1.425}>L</text>
            <text className={style.nameApp} x={props.width / 2.2} y={props.height / 1.290}>L</text>
            <text className={style.nameApp} x={props.width / 2.2} y={props.height / 1.175}>A</text>
            <text className={style.nameApp} x={props.width / 2.2} y={props.height / 1.075}>R</text>
        </>
    )
}