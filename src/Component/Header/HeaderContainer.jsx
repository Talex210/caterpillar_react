import {Header} from "./Header";
import {connect} from "react-redux";
import React from "react";

class HeaderContainer extends React.Component {
    render() {
        return (<Header nameApp={this.props.nameApp}
                        life={this.props.life}
                        snakeLength={this.props.snakeLength}
        />)
    }
}

const mapStateToProps = (state) => {
    return {
        nameApp: state.header.nameApp,
        life: state.gameArea.life,
        snakeLength: state.gameArea.snakeLength
    }
}

export default connect(mapStateToProps)(HeaderContainer)