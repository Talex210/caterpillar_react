import './App.css';
import {Header} from "./Component/Header/Header";
import {GameArea} from "./Component/GameZone/GameArea";
import {ControlButtons} from "./Component/ControlButtons/ControlButtons";

function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <GameArea />
      <ControlButtons />
    </div>
  );
}

export default App;
