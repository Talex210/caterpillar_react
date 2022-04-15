import style from './Border.module.css';

export const Border = (props) => {
    return (
        <>
            <rect className={style.border} x={0} y={0} width={props.width} height={props.blockSize}/>
            <rect className={style.border} x={0} y={props.height - props.blockSize} width={props.width}
                  height={props.blockSize}/>
            <rect className={style.border} x={0} y={0} width={props.blockSize} height={props.height}/>
            <rect className={style.border} x={props.width - props.blockSize} y={0} width={props.blockSize}
                  height={props.height}/>
        </>
    )
}
