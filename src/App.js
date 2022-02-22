import './App.css';
import {GameArea} from "./Component/GameZone/GameArea";
import {ControlButtons} from "./Component/ControlButtons/ControlButtons";
import HeaderContainer from "./Component/Header/HeaderContainer";

function App() {
    return (
        <div className='app-wrapper'>
            <HeaderContainer />
            <GameArea />
            <ControlButtons />
        </div>
    );
}

export default App;
