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

    useEffect(() => {
        const onKeypress = e => {
            switch (e.code) {
                case 'KeyD':
                    right()
                    break;
                case 'KeyA':
                    left()
                    break;
                case 'KeyW':
                    up()
                    break;
                case 'KeyS':
                    down()
                    break;
                default:
                    break;
            }
        }

        document.addEventListener('keypress', onKeypress);

        return () => {
            document.removeEventListener('keypress', onKeypress);
        };
    }, [down, left, right, up]);

    return (
        <div className={style.gameArea}>
            {/*{props.minusLife()}*/}
            {props.eatApple()}
            {props.bodyCollision()}
            <button onClick={left}>Left</button>
            <button onClick={right}>Right</button>
            <button onClick={up}>Up</button>
            <button onClick={down}>Down</button>
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