import style from './GameArea.module.css'
import {Border} from './Elements/Border/Border';
import {BlockSnake} from './Elements/BlockSnake/BlockSnake';
import {Apple} from "./Elements/Apple/Apple";

export const GameArea = (props) => {
    return (
        <div className={style.gameArea}>
            {props.collision()}
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
                <BlockSnake blockSize={props.blockSize} snake={props.snake}/>
                <Apple apple={props.apple} blockSize={props.blockSize}/>
            </svg>
        </div>
    )
}