import './App.css';
import HeaderContainer from "./Component/Header/HeaderContainer";
import GameAreaContainer from "./Component/GameArea/GameAreaContainer";

function App() {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <GameAreaContainer/>
        </div>
    );
}

export default App;
