import React from 'react';
import './App.css';
import TopBar from './TopBar/TopBar';

function App() {

  const nameValue = "Udaya";

  /* Return JSX */
  return (
    <div className="App">

      <TopBar name={nameValue}/>
      <header className="App-header">
       
      </header>
    </div>
  );
}

// setInterval(ReactDOM.render(App, 1000), document.getElementById('root'));

export default App;
