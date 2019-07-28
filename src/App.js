import React, { useState, useCallback } from 'react';
import './App.scss';
import infoBtn from './assets/info.svg';
import Button from './components/Button';
import king from './assets/king_happy.png';
import TempBlock from './components/TempBlock';
import SuccessBlock from './components/SuccessBlock';
import ListBlock from './components/ListBlock';
import HTML5Backend from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

function App() {
  const [tempBlock, setTempBlock] = useState([
    { accepts: ['card'], card: null },
    { accepts: ['card'], card: null },
    { accepts: ['card'], card: null },
    { accepts: ['card'], card: null },
  ]);

  const handleDrop = useCallback(
    (index, item) => {
      // console.log('index, item--->', index, item);
      const t = tempBlock;
      t[index].card = item;
      setTempBlock(t);
    },
    [tempBlock],
  )

  return (
    <div className="appWrapper">
      <div className="app">
        <main className="gameBlock">
          <DndProvider backend={HTML5Backend}>
            <div className="game_topBlock">
              <div className="leftTempBlock">
                {tempBlock.map(({ accepts, card }, index) =>
                  <TempBlock
                    // card={{ type: 'H', num: 13 }}
                    accept={accepts}
                    card={card}
                    onDrop={item => handleDrop(index, item)}
                    key={index}
                  />
                )}
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
              <ListBlock list={[{ type: 'H', num: 13 }, { type: 'H', num: 12 }]} />
              <ListBlock list={[]}/>
              <ListBlock list={[]}/>
              <ListBlock list={[]}/>
              <ListBlock list={[]}/>
              <ListBlock list={[]}/>
              <ListBlock list={[]}/>
              <ListBlock list={[]}/>
            </div>
          </DndProvider>
        </main>
        <nav className="navBlock">
          <div className="leftCol">
            <div className="nav_infoBtn" role="button"><img alt="info icon" src={infoBtn} /></div>
            <div className="nav_time">TIME: 00:00</div>
            <div className="nav_score">SCORE: 0</div>
          </div>
          <div className="rightCol">
            <Button text="NEW GAME" act={() => {}} />
            <Button text="RESTART" act={() => {}} />
            <Button text="HINT" act={() => {}} />
            <Button text="UNDO" act={() => {}} />
          </div>
        </nav>
      </div>
    </div>
  );
}

export default App;
