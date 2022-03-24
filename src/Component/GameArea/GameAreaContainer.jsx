import {connect} from 'react-redux';
import React from 'react';
import {GameArea} from './GameArea';
import {minusLife, plusLength} from '../../Redux/HeaderReducer';
import {IsThereCollision, moveRight, setStop} from '../../Redux/GameAreaReducer';

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
        let stop = setInterval(this.props.moveRight, 125);
        this.props.setStop(stop);
        setInterval(this.props.IsThereCollision, 125);
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
                          collision={this.collision}
                          eatApple={this.eatApple}
                          bodyCollision={this.bodyCollision}
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
        isCollision: state.gameArea.isCollision
    }
}

export default connect(mapStateToProps, {
    minusLife, plusLength, moveRight, setStop, IsThereCollision
})(GameAreaContainer)