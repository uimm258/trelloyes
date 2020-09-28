import React from 'react';
import './App.css';
import List from './List.js';


function App(props) {
  const list = props.store.lists.map(item =>
    <List key={item.id} header={item.header} cards={item.cardIds.map(id => props.store.allCards[id])}/>
  );
  return (
    <main className="App">
      <header className="App-header">
        <h1 className="App-list">
        Trelloyes!
        </h1>
      </header>
      <div className="App-list">
          {list}
      </div>
    </main>
  );
}
export default App;