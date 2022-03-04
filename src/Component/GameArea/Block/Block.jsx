// import style from './Block.module.css';

export const Block = (props) => {
    return (
        <>
            <rect x={10 * props.blockSize} y={15 * props.blockSize} width={props.blockSize} height={props.blockSize}/>
        </>
    )
}
