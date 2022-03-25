import {connect} from 'react-redux';
import React from 'react';
import {GameArea} from './GameArea';
import {minusLife, plusLength} from '../../Redux/HeaderReducer';
import {IsThereCollision, moveDown, moveLeft, moveRight, moveUp, setStop} from '../../Redux/GameAreaReducer';

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
        setInterval(this.props.IsThereCollision, 125);
        switch (this.props.direction) {
            case 'right':
                let stop = setInterval(this.props.moveRight, 125);
                this.props.setStop(stop);
                break;
            case 'up':
                let stop2 = setInterval(this.props.moveUp, 125);
                this.props.setStop(stop2);
                break;
            case 'down':
                let stop3 = setInterval(this.props.moveDown, 125);
                this.props.setStop(stop3);
                break;
            case 'left':
                let stop4 = setInterval(this.props.moveLeft, 125);
                this.props.setStop(stop4);
                break;
            default:
                break;
        }
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
        direction: state.gameArea.direction
    }
}

export default connect(mapStateToProps, {
    minusLife, plusLength, moveRight, setStop, IsThereCollision, moveUp, moveDown, moveLeft
})(GameAreaContainer)