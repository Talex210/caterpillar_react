import './App.css';
import {ControlButtons} from "./Component/ControlButtons/ControlButtons";
import HeaderContainer from "./Component/Header/HeaderContainer";
import GameAreaContainer from "./Component/GameArea/GameAreaContainer";

function App() {
    return (
        <div className='app-wrapper'>
            <HeaderContainer />
            <GameAreaContainer />
            <ControlButtons />
        </div>
    );
}

export default App;
