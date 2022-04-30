import {GameOverSmallWidth} from './GameOverSmallWidth/GameOverSmallWidth';
import {GameOverWidth} from './GameOverWidth/GameOverWidth';

export const GameOver = (props) => {
    return (
        <>
            {props.width <= 600 ? <GameOverSmallWidth/> : <GameOverWidth/>}
        </>
    )
}