import React from 'react';
import logo from './logo.svg';
import './App.scss';
import infoBtn from './assets/info.svg';
import Button from './components/Button';

function App() {
  return (
    <div className="appWrapper">
      <div className="app">
        <main className="gameBlock">game block</main>
        <nav className="navBlock">
          <div className="leftCol">
            <div className="nav_infoBtn" role="button"><img src={infoBtn} /></div>
            <div className="nav_time">TIME: 00:00</div>
            <div className="nav_score">SCORE: 0</div>
          </div>
          <div className="rightCol">
            <Button text="NEW GAME" act={() => console.log("click")} />
            <Button text="RESTART" act={() => console.log("click")} />
            <Button text="HINT" act={() => console.log("click")} />
            <Button text="UNDO" act={() => console.log("click")} />
          </div>
        </nav>
      </div>
    </div>
  );
}

export default App;
