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

    widthInBlocks = Math.trunc(this.props.width / this.props.blockSize) - 1;
    heightInBlocks = Math.trunc(this.props.height / this.props.blockSize) - 1;
    headSnakeX = this.props.snake.x[this.props.snake.x.length - 1];
    headSnakeY = this.props.snake.y[this.props.snake.y.length - 1];
    bodySnakeX = this.props.snake.x.slice(0, this.props.snake.x.length - 1);
    bodySnakeY = this.props.snake.y.slice(0, this.props.snake.y.length - 1);
    life = this.props.life;
    snakeLength = this.props.snakeLength;
    intervalStop = this.props.intervalStop;
    isCollision = this.props.isCollision;

    componentDidMount() {
        setInterval(this.props.IsThereCollision, 100);
        /*let stop = setInterval(this.props.moveRight, 125);
        this.props.setStop(stop);*/
    }

    setStop = (stop) => {
        this.props.setStop(stop);
    }

    right = () => {
        this.props.moveRight();
    }

    up = () => {
        this.props.moveUp();
    }

    down = () => {
        this.props.moveDown();
    }

    left = () => {
        this.props.moveLeft();
    }

    bodyCollision = () => {
        for (let i = 0; i < this.bodySnakeX.length; i++) {
            if (this.bodySnakeX[i] === this.headSnakeX && this.bodySnakeY[i] === this.headSnakeY) {
                this.props.minusLife(this.life - 1)
            }
        }
    }

    /*collision = () => {
        if (this.headSnakeX === 0 || this.headSnakeY === 0 || this.headSnakeX === this.widthInBlocks ||
            this.headSnakeY === this.heightInBlocks) {
            this.props.minusLife(this.life - 1);
        }
    }*/

    /*minusLife2 = () => {
        if (this.isCollision) {
            this.props.minusLife(this.life - 1)
        }
    }*/

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
                          bodyCollision={this.bodyCollision}
                          up={this.up}
                          intervalStop={this.props.intervalStop}
                          setStop={this.setStop}
                          right={this.right}
                          down={this.down}
                          left={this.left}
                          direction={this.props.direction}
                          isStop={this.props.isStop}
                          setStartStop={this.props.setStartStop}
                    // minusLife={this.minusLife2}
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