import style from './GameArea.module.css'
import {Border} from './Border/Border';
import {Block} from './Block/Block';

export const GameArea = (props) => {
    return (
        <div className={style.gameArea}>
            <svg className={style.canvas}
                 id='canvas'
                 viewBox={props.viewBox}>
                {/*Test work for yourself*/}
                {/*<circle cx={100} cy={20} r={20}/>
                <rect x={50} y={100} width={200} height={200}/>*/}
                <Border width={props.width}
                        blockSize={props.blockSize}
                        height={props.height}
                />
                <Block blockSize={props.blockSize}/>
            </svg>
        </div>
    )
}