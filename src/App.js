import React from 'react';
import './App.scss';
import infoBtn from './assets/info.svg';
import Button from './components/Button';
import king from './assets/king_happy.png';
import TempBlock from './components/TempBlock';
import SuccessBlock from './components/SuccessBlock';
import CardList from './components/CardList';

function App() {
  return (
    <div className="appWrapper">
      <div className="app">
        <main className="gameBlock">
          <div className="game_topBlock">
            <div className="leftTempBlock">
              <TempBlock card={{ type: 'H', num: 13 }} />
              <TempBlock />
              <TempBlock />
              <TempBlock />
            </div>
            <div className="center">
              <img alt="king" src={king} />
              <h1>FREECELL</h1>
            </div>
            <div className="rightSuccessBlock">
              <SuccessBlock type="S" />
              <SuccessBlock type="H" />
              <SuccessBlock type="D" />
              <SuccessBlock type="C" />
            </div>
          </div>
          <div className="game_bottomBlock">
            <CardList list={[{ type: 'H', num: 13 }, { type: 'H', num: 12 }]} />
            <CardList list={[]}/>
            <CardList list={[]}/>
            <CardList list={[]}/>
            <CardList list={[]}/>
            <CardList list={[]}/>
            <CardList list={[]}/>
            <CardList list={[]}/>
          </div>
        </main>
        <nav className="navBlock">
          <div className="leftCol">
            <div className="nav_infoBtn" role="button"><img alt="info icon" src={infoBtn} /></div>
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
