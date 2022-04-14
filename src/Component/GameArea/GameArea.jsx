import style from './GameArea.module.css'
import {Border} from './Elements/Border/Border';
import {BlockSnake} from './Elements/BlockSnake/BlockSnake';
import {Apple} from './Elements/Apple/Apple';
import {useEffect, useState} from 'react';
import {GameOver} from './Elements/GameOver/GameOver';

export const GameArea = (props) => {
    let isStop, setStop, start, stop;
    [isStop, setStop] = useState(true);
    start = () => {
        setStop(false);
        props.start(false);
    };
    stop = () => {
        setStop(true);
        props.stop();
        props.start(true);
    };

    useEffect(() => {
        const onKeypress = e => {
            switch (e.code) {
                case 'KeyD':
                case 'Numpad6':
                    props.right(isStop);
                    return;
                case 'KeyA':
                case 'Numpad4':
                    props.left(isStop);
                    return;
                case 'KeyW' :
                case 'Numpad8':
                    props.up(isStop);
                    return;
                case 'KeyS':
                case 'Numpad2':
                    props.down(isStop);
                    return;
                case 'Space':
                    isStop ? start() : stop();
                    return;
                default:
                    return;
            }
        }

        document.addEventListener('keypress', onKeypress);

        return () => {
            document.removeEventListener('keypress', onKeypress);
        };
    }, [isStop, props, start, stop]);

    const left = () => {
        props.left(isStop);
    }

    const right = () => {
        props.right(isStop);
    }

    const up = () => {
        props.up(isStop);
    }

    const down = () => {
        props.down(isStop);
    }

    return (
        <div className={style.gameArea}>
            <div className={style.collision}>
                {props.isCollision ? clearInterval(props.intervalStop) :
                    (setTimeout(props.collision, props.timeout), setTimeout(props.moveApple, props.timeout))}
            </div>
            <svg viewBox={props.viewBox}>
                {props.life === 0 ? <GameOver width={props.width} height={props.height}/> : null}
                <Border width={props.width} blockSize={props.blockSize} height={props.height}/>
                <BlockSnake blockSize={props.blockSize} snake={props.snake}/>
                <Apple apple={props.apple} blockSize={props.blockSize}/>
            </svg>
            <div className={style.controlButton}>
                <button onClick={left} disabled={props.life === 0 ? 'disabled' : null}>Left</button>
                <button onClick={right} disabled={props.life === 0 ? 'disabled' : null}>Right</button>
                <button onClick={up} disabled={props.life === 0 ? 'disabled' : null}>Up</button>
                <button onClick={down} disabled={props.life === 0 ? 'disabled' : null}>Down</button>
                <button onClick={isStop ? start : stop} disabled={props.life === 0 ? 'disabled' : null}>
                    Start / Stop
                </button>
            </div>
        </div>
    )
}