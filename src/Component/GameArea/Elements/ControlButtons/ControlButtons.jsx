import style from './ControlButtons.module.css'

export const ControlButtons = (props) => {
    return (
        <div className={style.controlButtons}>
            <button onClick={props.left} disabled={props.life === 0 ? 'disabled' : null}>Left</button>
            <button onClick={props.right} disabled={props.life === 0 ? 'disabled' : null}>Right</button>
            <button onClick={props.up} disabled={props.life === 0 ? 'disabled' : null}>Up</button>
            <button onClick={props.down} disabled={props.life === 0 ? 'disabled' : null}>Down</button>
            <button onClick={props.isStop ? props.start : props.stop} disabled={props.life === 0 ? 'disabled' : null}>
                Start / Stop
            </button>
        </div>
    )
}