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
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        width: state.gameArea.width,
        blockSize: state.gameArea.blockSize,
        height: state.gameArea.height
    }
}

export default connect(mapStateToProps)(GameAreaContainer)