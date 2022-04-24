import style from './GameArea.module.css'
import {Border} from './Elements/Border/Border';
import {BlockSnake} from './Elements/BlockSnake/BlockSnake';
import {Apple} from './Elements/Apple/Apple';
import {useEffect, useState} from 'react';
import {GameOver} from './Elements/GameOver/GameOver';
import {ControlButtons} from "./Elements/ControlButtons/ControlButtons";
import {NameApp} from "./Elements/NameApp/NameApp";
import {Header} from "./Elements/Header/Header";

export const GameArea = (props) => {
    let isStop, setStop, start, stop;
    [isStop, setStop] = useState(true);
    start = () => {
        setStop(false);
        props.start(false);
    }
    stop = () => {
        setStop(true);
        props.stop();
        props.start(true);
    }

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
        }
    }, [isStop, props, start, stop])

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
                {props.isCollision ? (clearInterval(props.intervalStop), setTimeout(stop, props.speed)) :
                    (setTimeout(props.collision, props.speed), setTimeout(props.moveApple, props.speed))}
            </div>
            <svg viewBox={props.viewBox}>
                {props.life === 0 ? <GameOver width={props.width} height={props.height}/> :
                    <NameApp width={props.width} height={props.height}/>}
                <Border width={props.width} blockSize={props.blockSize} height={props.height}/>
                <BlockSnake blockSize={props.blockSize} snake={props.snake}/>
                <Apple apple={props.apple} blockSize={props.blockSize}/>
            </svg>
            <ControlButtons life={props.life} left={left} right={right} up={up} down={down} isStop={isStop}
                            start={start} stop={stop} width={props.width}/>
            <Header life={props.life} snakeLength={props.snakeLength}/>
        </div>
    )
}