import style from './GameArea.module.css'
import {Border} from './Elements/Border/Border';
import {BlockSnake} from './Elements/BlockSnake/BlockSnake';
import {Apple} from "./Elements/Apple/Apple";
import {useEffect} from "react";

export const GameArea = (props) => {

    const right = () => {
        clearInterval(props.intervalStop);
        let stop = setInterval(props.right, 125);
        props.setStop(stop)
    }

    const left = () => {
        clearInterval(props.intervalStop);
        let stop = setInterval(props.left, 125);
        props.setStop(stop)
    }

    const up = () => {
        clearInterval(props.intervalStop);
        let stop = setInterval(props.up, 125);
        props.setStop(stop)
    }

    const down = () => {
        clearInterval(props.intervalStop);
        let stop = setInterval(props.down, 125);
        props.setStop(stop)
    }

    const stop = () => {
        props.setStartStop(true);
        clearInterval(props.intervalStop);
    }

    const start = () => {
        props.setStartStop(false);
        switch (props.direction) {
            case 'right':
                right();
                break;
            case 'left':
                left();
                break;
            case 'up':
                up();
                break;
            case 'down':
                down();
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        const onKeypress = e => {
            switch (e.code) {
                case 'KeyD':
                case 'Numpad6':
                    right()
                    break;
                case 'KeyA':
                case 'Numpad4':
                    left()
                    break;
                case 'KeyW' :
                case 'Numpad8':
                    up()
                    break;
                case 'KeyS':
                case 'Numpad2':
                    down()
                    break;
                case 'Space':
                    props.isStop ? start() : stop()
                    break;
                default:
                    break;
            }
        }

        document.addEventListener('keypress', onKeypress);

        return () => {
            document.removeEventListener('keypress', onKeypress);
        };
    }, [down, left, props.isStop, right, start, stop, up]);

    return (
        <div className={style.gameArea}>
            {/*{props.minusLife()}*/}
            {props.eatApple()}
            {props.bodyCollision()}
            <button onClick={left}>Left</button>
            <button onClick={right}>Right</button>
            <button onClick={up}>Up</button>
            <button onClick={down}>Down</button>
            <button onClick={props.isStop ? start : stop}>Start / Stop</button>
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