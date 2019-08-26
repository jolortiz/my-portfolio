import React from 'react';
import backarrow from './assets/back-arrow.svg';
import rightarrow from './assets/right-arrow.svg';
import rootifyscreenshot from './assets/rootfiy-screenshot.png';
import './App.css';

const info = [
  {/* This entry is used to display profile info */},
  {imgUrl: rootifyscreenshot, title: 'Rootify'},
  {imgUrl: "https://lh3.googleusercontent.com/oxPeODS2m6rYIVbhcQChRtOWEYeGDwbeeeB1cDU2o_WYAVPU61VIgx-_6BAh5gSL8Sw=h900", title: 'Bad Kat'},
  {imgUrl: "https://i.pinimg.com/736x/07/c3/45/07c345d0eca11d0bc97c894751ba1b46.jpg", title: 'Hero Kitty'},
  {imgUrl: "https://ehealthforum.com/health/images/avatars/11699147425707699031013.jpeg", title: 'Gwen'}
];

const ImageSlide = ({ index }) => {
  return <div>
    <img className="slide" src={info[index].imgUrl} alt={info[index].title}/>
    <h2>{info[index].title}</h2>
  </div>;
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    };
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }
  previousSlide() {
    const lastIndex = info.length - 1;
    const { currentIndex } = this.state;
    const shouldResetIndex = currentIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentIndex - 1;
    this.setState({
      currentIndex: index
    });
  }
  nextSlide() {
    const lastIndex = info.length - 1;
    const { currentIndex } = this.state;
    const shouldResetIndex = currentIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentIndex + 1;
    this.setState({
      currentIndex: index
    });
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="panel left">
            <img className="panel__button" src={backarrow} onClick={this.previousSlide} alt="Back"/>
          </div>
          <div className="carousel">
            {this.state.currentIndex !== 0 ? 
              <ImageSlide index={this.state.currentIndex} /> : 
              <div>
                <h1>Jonathan Ortiz</h1>
                <h2>Full Stack Developer</h2>
              </div>
            }
          </div>
          <div className="panel right">
            <img className="panel__button" src={rightarrow} onClick={this.nextSlide} alt="Next"/>
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
