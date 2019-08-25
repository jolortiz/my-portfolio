import React from 'react';
import backarrow from './assets/back-arrow.svg';
import rightarrow from './assets/right-arrow.svg';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="panel">
            <img className="panel__button" src={backarrow}/>
          </div>
          <div className="carousel">
            <h1>This is my dev branch</h1>
          </div>
          <div className="panel">
            <img className="panel__button" src={rightarrow}/>
          </div>
        </div>
      </div>
    );
  }
}

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */
