import style from './ControlButtons.module.css'
import left from '../../../../assets/img/left.png'
import right from '../../../../assets/img/right.png'
import up from '../../../../assets/img/up.png'
import down from '../../../../assets/img/down.png'
import start from '../../../../assets/img/start.png'
import stop from '../../../../assets/img/stop.png'

export const ControlButtons = (props) => {
    const sizeButton = () => {
        switch(true) {
            case (props.width > 900):
                return style.controlButtons
            case (props.width > 800):
                return style.controlButtons_Width800
            case (props.width > 600):
                return style.controlButtons_Width600
            case (props.width > 500):
                return style.controlButtons_Width500
            case (props.width > 400):
                return style.controlButtons_Width400
            case (props.width > 300):
                return style.controlButtons_Width300
            default: return style.controlButtons_Width300
        }
    }

    return (
        <div /*className={props.width <= 600 ? style.controlButtons_smallWidth : style.controlButtons}*/
            className={sizeButton()}
        >
            <button className={style.left} onClick={props.left} disabled={props.life[0] === false ? 'disabled' : null}>
                <img alt={'button left'} src={left}/>
            </button>
            <button className={style.right} onClick={props.right}
                    disabled={props.life[0] === false ? 'disabled' : null}>
                <img alt={'button right'} src={right}/>
            </button>
            <button className={style.up} onClick={props.up} disabled={props.life[0] === false ? 'disabled' : null}>
                <img alt={'button up'} src={up}/>
            </button>
            <button className={style.down} onClick={props.down} disabled={props.life[0] === false ? 'disabled' : null}>
                <img alt={'button down'} src={down}/>
            </button>
            <button className={style.startStop} onClick={props.isStop ? props.start : props.stop}
                    disabled={props.life[0] === false ? 'disabled' : null}>
                <img alt={'button start / stop'} src={props.isStop ? start : stop}/>
            </button>
        </div>
    )
}