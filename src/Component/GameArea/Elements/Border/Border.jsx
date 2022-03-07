import style from './Border.module.css';

export const Border = (props) => {
    return (
        <>
            <rect x={0} y={0} width={props.width} height={props.blockSize} className={style.border}/>
            <rect x={0} y={props.height - props.blockSize} width={props.width} height={props.blockSize}
                  className={style.border}/>
            <rect x={0} y={0} width={props.blockSize} height={props.height} className={style.border}/>
            <rect x={props.width - props.blockSize} y={0} width={props.blockSize} height={props.height}
                  className={style.border}/>
        </>
    )
}
