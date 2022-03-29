import {connect} from 'react-redux';
import React from 'react';
import {GameArea} from './GameArea';
import {minusLife, plusLength} from '../../Redux/HeaderReducer';
import {
    IsThereCollision,
    moveDown,
    moveLeft,
    moveRight,
    moveUp,
    setStartStop,
    setStop
} from '../../Redux/GameAreaReducer';

class GameAreaContainer extends React.Component {
    viewBox = [0, 0, this.props.width, this.props.height];

    componentDidMount() {
        setInterval(this.props.IsThereCollision, 100);
        /*let stop = setInterval(this.props.moveRight, 125);
        this.props.setStop(stop);*/
    }

    right = () => {
        clearInterval(this.props.intervalStop);
        let stop = setInterval(this.props.moveRight, 125);
        this.props.setStop(stop)
    }

    left = () => {
        clearInterval(this.props.intervalStop);
        let stop = setInterval(this.props.moveLeft, 125);
        this.props.setStop(stop)
    }

    up = () => {
        clearInterval(this.props.intervalStop);
        let stop = setInterval(this.props.moveUp, 125);
        this.props.setStop(stop)
    }

    down = () => {
        clearInterval(this.props.intervalStop);
        let stop = setInterval(this.props.moveDown, 125);
        this.props.setStop(stop)
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
                break;
            case 'left':
                this.left();
                break;
            case 'up':
                this.up();
                break;
            case 'down':
                this.down();
                break;
            default:
                break;
        }
    }

    eatApple = () => {
        if (this.headSnakeX === this.props.apple.x && this.headSnakeY === this.props.apple.y) {
            this.props.plusLength(this.snakeLength + 1);
        }
    }

    render() {
        return (
            <>
                {this.props.isCollision ? clearInterval(this.props.intervalStop) : null}
                <GameArea viewBox={this.viewBox}
                          width={this.props.width}
                          blockSize={this.props.blockSize}
                          height={this.props.height}
                          apple={this.props.apple}
                          snake={this.props.snake}
                          eatApple={this.eatApple}
                          intervalStop={this.props.intervalStop}
                          setStop={this.setStop}
                          right={this.right}
                          left={this.left}
                          up={this.up}
                          down={this.down}
                          stop={this.stop}
                          start={this.start}
                          isStop={this.props.isStop}
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
        life: state.header.life,
        snakeLength: state.header.snakeLength,
        intervalStop: state.gameArea.intervalStop,
        isCollision: state.gameArea.isCollision,
        direction: state.gameArea.direction,
        isStop: state.gameArea.isStop
    }
}

export default connect(mapStateToProps, {
    minusLife, plusLength, moveRight, setStop, IsThereCollision, moveUp, moveDown, moveLeft, setStartStop
})(GameAreaContainer)