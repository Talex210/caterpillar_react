import {GameOverSmallWidth} from './GameOverSmallWidth/GameOverSmallWidth';
import {GameOverWidth} from './GameOverWidth/GameOverWidth';

export const GameOver = (props) => {
    return (
        <>
            {props.width <= 600 ? <GameOverSmallWidth width={props.width} height={props.height}/> :
                <GameOverWidth width={props.width} height={props.height}/>}
        </>
    )
}