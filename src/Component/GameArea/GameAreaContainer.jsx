import {connect} from 'react-redux';
import React from 'react';
import {GameArea} from './GameArea';

class GameAreaContainer extends React.Component {
    viewBox = [0, 0, this.props.width, this.props.height]
    widthInBlocks = this.props.width / this.props.blockSize // использовать Math для получения целого числа
    heightInBlocks = this.props.height / this.props.blockSize // использовать Math для получения целого числа
    render() {
        return (
            <GameArea viewBox={this.viewBox}
                      width={this.props.width}
                      blockSize={this.props.blockSize}
                      height={this.props.height}
                      apple={this.props.apple}
                      snake={this.props.snake}
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
        snake: state.gameArea.snake
    }
}

export default connect(mapStateToProps)(GameAreaContainer)