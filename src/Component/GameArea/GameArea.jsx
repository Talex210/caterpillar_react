import style from './GameArea.module.css'
import {Border} from './Elements/Border/Border';
import {BlockSnake} from './Elements/BlockSnake/BlockSnake';
import {Apple} from "./Elements/Apple/Apple";
import {useEffect} from "react";

export const GameArea = (props) => {

    useEffect(() => {
        const onKeypress = e => {
            switch (e.code) {
                case 'KeyD':
                case 'Numpad6':
                    props.right()
                    return;
                case 'KeyA':
                case 'Numpad4':
                    props.left()
                    return;
                case 'KeyW' :
                case 'Numpad8':
                    props.up()
                    return;
                case 'KeyS':
                case 'Numpad2':
                    props.down()
                    return;
                case 'Enter':
                    props.isStop ? props.start() : props.stop()
                    return;
                default:
                    return;
            }
        }

        document.addEventListener('keypress', onKeypress);

        return () => {
            document.removeEventListener('keypress', onKeypress);
        };
    }, [props, props.isStop]);

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
                <BlockSnake blockSize={props.blockSize} snake={props.snake}/>
                <Apple apple={props.apple} blockSize={props.blockSize}/>
            </svg>
            <div className={style.controlButton}>
                <button onClick={props.left}>Left</button>
                <button onClick={props.right}>Right</button>
                <button onClick={props.up}>Up</button>
                <button onClick={props.down}>Down</button>
                <button onClick={props.isStop ? props.start : props.stop}>Start / Stop</button>
            </div>
        </div>
    )
}