import style from './ControlButtons.module.css'
import {useEffect, useRef} from "react";
import {moveUp} from "../../Redux/GameAreaReducer";

export const ControlButtons = () => {

    /*useEffect(() => {
        const onKeypress = e => console.log(e);

        document.addEventListener('keypress', onKeypress);

        return () => {
            document.removeEventListener('keypress', onKeypress);
        };
    }, []);*/

    const useKey = (key, cb) => {
        const callbackRef = useRef(cb);
        useEffect(() => {
            callbackRef.current = cb
        })
        useEffect(() => {
            const handle = event => {
                if (event.code === key) {
                    callbackRef.current(event)
                }
            }

            document.addEventListener('keypress', handle)
            return () => document.removeEventListener('keypress', handle)
        }, [key])
    }

    const handleSpace = () => {
        console.log('Space key is pressed')
    }
    useKey('Space', handleSpace)

    const handleKeyW = () => {
        console.log('W key is pressed')
        moveUp()
    }
    useKey('KeyW', handleKeyW)

    const handleKeyA = () => {
        console.log('A key is pressed')
    }
    useKey('KeyA', handleKeyA)

    const handleKeyS = () => {
        console.log('S key is pressed')
    }
    useKey('KeyS', handleKeyS)

    const handleKeyD = () => {
        console.log('D key is pressed')
    }
    useKey('KeyD', handleKeyD)

    return (
        <div className={style.controlButtons}>
            ControlButtons
        </div>
    )
}