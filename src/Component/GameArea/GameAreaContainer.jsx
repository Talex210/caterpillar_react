import {connect} from "react-redux";
import React from "react";
import {GameArea} from "./GameArea";

class GameAreaContainer extends React.Component {
    render() {
        return (<GameArea/>)
    }
}

const mapStateToProps = () => {
    return {

    }
}

export default connect(mapStateToProps)(GameAreaContainer)