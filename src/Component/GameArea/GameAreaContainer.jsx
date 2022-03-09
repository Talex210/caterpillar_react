import {connect} from 'react-redux';
import React from 'react';
import {GameArea} from './GameArea';
import {minusLife, plusLength} from '../../Redux/HeaderReducer';

class GameAreaContainer extends React.Component {
    viewBox = [0, 0, this.props.width, this.props.height];

    widthInBlocks = Math.trunc(this.props.width / this.props.blockSize) - 1;
    heightInBlocks = Math.trunc(this.props.height / this.props.blockSize) - 1;

    headSnakeX = this.props.snake.x[this.props.snake.x.length - 1];
    headSnakeY = this.props.snake.y[this.props.snake.y.length - 1];

    life = this.props.life;
    snakeLength = this.props.snakeLength;

    collision = () => {
        if (this.headSnakeX === 0 || this.headSnakeY === 0 || this.headSnakeX === this.widthInBlocks ||
            this.headSnakeY === this.heightInBlocks) {
            this.props.minusLife(this.life - 1);
        }
    }

    eatApple = () => {
        if (this.headSnakeX === this.props.apple.x && this.headSnakeY === this.props.apple.y) {
            this.props.plusLength(this.snakeLength + 1);
        }
    }

    render() {
        return (
                <GameArea viewBox={this.viewBox}
                          width={this.props.width}
                          blockSize={this.props.blockSize}
                          height={this.props.height}
                          apple={this.props.apple}
                          snake={this.props.snake}
                          collision={this.collision}
                          eatApple={this.eatApple}
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
        isCollision: state.gameArea.isCollision,
        isEat: state.gameArea.isEat,
        life: state.header.life,
        snakeLength: state.header.snakeLength
    }
}

export default connect(mapStateToProps, {minusLife, plusLength})(GameAreaContainer)