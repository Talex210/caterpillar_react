import style from './GameArea.module.css'
import {Border} from './Elements/Border/Border';
import {BlockSnake} from './Elements/BlockSnake/BlockSnake';
import {Apple} from "./Elements/Apple/Apple";
import {useEffect} from "react";
import {GameOver} from "./Elements/GameOver/GameOver";

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
                case 'Space':
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
            <div className={style.collision}>
                {props.isCollision ? clearInterval(props.intervalStop) : setTimeout(props.collision, 100)}
            </div>
            <svg className={style.canvas}
                 viewBox={props.viewBox}>
                {props.life === 0 ? <GameOver width={props.width} height={props.height}/> : null}
                <Border width={props.width} blockSize={props.blockSize} height={props.height}/>
                <BlockSnake blockSize={props.blockSize} snake={props.snake}/>
                <Apple apple={props.apple} blockSize={props.blockSize}/>
            </svg>
            <div className={style.controlButton}>
                <button onClick={props.left} disabled={props.life === 0 ? 'disabled' : null}>Left</button>
                <button onClick={props.right} disabled={props.life === 0 ? 'disabled' : null}>Right</button>
                <button onClick={props.up} disabled={props.life === 0 ? 'disabled' : null}>Up</button>
                <button onClick={props.down} disabled={props.life === 0 ? 'disabled' : null}>Down</button>
                <button onClick={props.isStop ? props.start : props.stop}
                        disabled={props.life === 0 ? 'disabled' : null}>Start / Stop
                </button>
            </div>
        </div>
    )
}