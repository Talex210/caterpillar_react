import style from './NameAppWidth.module.css';

export const NameAppWidth = (props) => {
    const changeY = () => {
        switch (true) {
            case (window.innerWidth > 900):
                return props.height / 1.7;
            case (window.innerWidth > 800):
                return props.height / 1.75;
            case (window.innerWidth > 700):
                return props.height / 1.775;
            case (window.innerWidth > 600):
                return props.height / 1.8;
            default:
                return props.height / 1.775;
        }
    }
    return (
        <>
            <text className={style.nameApp} x={props.width / 8.5} y={changeY()}>CATERPILLAR</text>
        </>
    )
}