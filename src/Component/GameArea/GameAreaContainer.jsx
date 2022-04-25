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
    setStop
} from '../../Redux/GameAreaReducer';

class GameAreaContainer extends React.Component {
    viewBox = [0, 0, this.props.width, this.props.height];

    right = (isStop) => {
        if (this.props.direction !== 'left' && !isStop) {
            clearInterval(this.props.intervalStop);
            let stop = setInterval(this.props.moveRight, this.props.speed);
            this.props.setStop(stop)
        }
    }

    left = (isStop) => {
        if (this.props.direction !== 'right' && !isStop) {
            clearInterval(this.props.intervalStop);
            let stop = setInterval(this.props.moveLeft, this.props.speed);
            this.props.setStop(stop)
        }
    }

    up = (isStop) => {
        if (this.props.direction !== 'down' && !isStop) {
            clearInterval(this.props.intervalStop);
            let stop = setInterval(this.props.moveUp, this.props.speed);
            this.props.setStop(stop)
        }
    }

    down = (isStop) => {
        if (this.props.direction !== 'up' && !isStop) {
            clearInterval(this.props.intervalStop);
            let stop = setInterval(this.props.moveDown, this.props.speed);
            this.props.setStop(stop)
        }
    }

    stop = () => {
        clearInterval(this.props.intervalStop);
    }

    start = (isStop) => {
        if (this.props.life[0] === true) {
            switch (this.props.direction) {
                case 'right':
                    this.right(isStop);
                    return;
                case 'left':
                    this.left(isStop);
                    return;
                case 'up':
                    this.up(isStop);
                    return;
                case 'down':
                    this.down(isStop);
                    return;
                default:
                    return;
            }
        }
    }

    collision = () => {
        this.props.IsThereCollision();
    }

    moveApple = () => {
        this.props.moveApple();
    }

    render() {
        return (
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
                isCollision={this.props.isCollision}
                intervalStop={this.props.intervalStop}
                collision={this.collision}
                life={this.props.life}
                speed={this.props.speed}
                moveApple={this.moveApple}
                snakeLength={this.props.snakeLength}
            />
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
        life: state.gameArea.life,
        speed: state.gameArea.speed,
        snakeLength: state.gameArea.snakeLength
    }
}

export default connect(mapStateToProps, {
    moveRight, setStop, IsThereCollision, moveUp, moveDown, moveLeft, moveApple
})(GameAreaContainer)