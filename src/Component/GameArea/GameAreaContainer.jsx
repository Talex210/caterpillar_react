import {connect} from 'react-redux';
import React from 'react';
import {GameArea} from './GameArea';
import {
    IsThereCollision,
    moveApple,
    moveDown,
    moveLeft,
    moveRight,
    moveUp,
    setStartStop,
    setStop,
    setStopCollision
} from '../../Redux/GameAreaReducer';

class GameAreaContainer extends React.Component {
    viewBox = [0, 0, this.props.width, this.props.height];

    componentDidMount() {
        /*let stop = setInterval(this.props.IsThereCollision, 100);
        this.props.setStopCollision(stop);*/
        setInterval(this.props.moveApple, 125);
    }

    right = () => {
        if (this.props.direction !== 'left') {
            clearInterval(this.props.intervalStop);
            let stop = setInterval(this.props.moveRight, 125);
            this.props.setStop(stop)
        }
    }

    left = () => {
        if (this.props.direction !== 'right') {
            clearInterval(this.props.intervalStop);
            let stop = setInterval(this.props.moveLeft, 125);
            this.props.setStop(stop)
        }
    }

    up = () => {
        if (this.props.direction !== 'down') {
            clearInterval(this.props.intervalStop);
            let stop = setInterval(this.props.moveUp, 125);
            this.props.setStop(stop)
        }
    }

    down = () => {
        if (this.props.direction !== 'up') {
            clearInterval(this.props.intervalStop);
            let stop = setInterval(this.props.moveDown, 125);
            this.props.setStop(stop)
        }
    }

    stop = () => {
        this.props.setStartStop(true);
        clearInterval(this.props.intervalStop);
    }

    start = () => {
        this.props.setStartStop(false);
        switch (this.props.direction) {
            case 'right':
                this.right();
                return;
            case 'left':
                this.left();
                return;
            case 'up':
                this.up();
                return;
            case 'down':
                this.down();
                return;
            default:
                return;
        }
    }

    collision = () => {
        this.props.IsThereCollision()
    }

    render() {
        return (
            <>
                {/*{this.props.isCollision ? (clearInterval(this.props.intervalStop),
                    clearInterval(this.props.intervalCollision)) : setTimeout(this.props.IsThereCollision, 100)}*/}
                <GameArea
                    viewBox={this.viewBox}
                    width={this.props.width}
                    blockSize={this.props.blockSize}
                    height={this.props.height}
                    apple={this.props.apple}
                    snake={this.props.snake}
                    right={this.right}
                    left={this.left}
                    up={this.up}
                    down={this.down}
                    stop={this.stop}
                    start={this.start}
                    isStop={this.props.isStop}
                    isCollision={this.props.isCollision}
                    intervalStop={this.props.intervalStop}
                    intervalCollision={this.props.intervalCollision}
                    collision={this.collision}
                />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        width: state.gameArea.width,
        blockSize: state.gameArea.blockSize,
        height: state.gameArea.height,
        apple: state.gameArea.apple,
        snake: state.gameArea.snake,
        intervalStop: state.gameArea.intervalStop,
        isCollision: state.gameArea.isCollision,
        direction: state.gameArea.direction,
        isStop: state.gameArea.isStop,
        intervalCollision: state.gameArea.intervalCollision
    }
}

export default connect(mapStateToProps, {
    moveRight, setStop, IsThereCollision, moveUp, moveDown, moveLeft, setStartStop, setStopCollision, moveApple
})(GameAreaContainer)