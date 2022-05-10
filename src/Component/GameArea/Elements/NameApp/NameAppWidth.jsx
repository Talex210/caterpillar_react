import style from './NameAppWidth.module.css';

export const NameAppWidth = (props) => {
    return (
        <>
            {/*для pc - приминять от высоты экрана*/}
            <text className={style.nameApp} x={props.width / 8.5} y={props.height / 1.7}>CATERPILLAR</text> {/*для ширины 900 и выше*/}
        </>
    )
}