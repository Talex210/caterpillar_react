import style from './NameAppSmallWidth.module.css';

export const NameAppSmallWidth = (props) => {
    const changeStyle = () => {
        return window.innerHeight / window.innerWidth <= 1.5 ? style.nameAppPC : style.nameAppMobile;
    }
    const textX = () => {
        return window.innerHeight / window.innerWidth <= 1.5 ? props.width / 2.15 : props.width / 2.2;
    }
    return (
        <>
            <text className={changeStyle()} x={textX()} y={props.height / 7}>C</text>
            <text className={changeStyle()} x={textX()} y={props.height / 4.5}>A</text>
            <text className={changeStyle()} x={textX()} y={props.height / 3.3}>T</text>
            <text className={changeStyle()} x={textX()} y={props.height / 2.65}>E</text>
            <text className={changeStyle()} x={textX()} y={props.height / 2.225}>R</text>
            <text className={changeStyle()} x={textX()} y={props.height / 1.9}>P</text>
            <text className={changeStyle()}
                  x={props.width / (window.innerHeight / window.innerWidth <= 1.5 ? 2.1 : 2.13)}
                  y={props.height / 1.66}>I
            </text>
            <text className={changeStyle()} x={textX()} y={props.height / 1.475}>L</text>
            <text className={changeStyle()} x={textX()} y={props.height / 1.325}>L</text>
            <text className={changeStyle()} x={textX()} y={props.height / 1.2}>A</text>
            <text className={changeStyle()} x={textX()} y={props.height / 1.1}>R</text>
        </>
    )
}