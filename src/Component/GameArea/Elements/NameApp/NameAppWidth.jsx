import style from './NameAppWidth.module.css';

export const NameAppWidth = (props) => {
    return (
        <>
            {/*x={window.innerWidth / 8.5} y={window.innerHeight / 2.1}*/}
            <text className={style.nameApp} x={props.width / 8.5} y={props.height / 1.7}>CATERPILLAR</text>
        </>
    )
}