// import style from './Apple.module.css';

export const Apple = (props) => {
    return (
        <>
            <circle cx={props.apple.x * props.blockSize + props.blockSize / 2}
                    cy={props.apple.y * props.blockSize + props.blockSize / 2}
                    r={props.blockSize / 2}/>
        </>
    )
}
