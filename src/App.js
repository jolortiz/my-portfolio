import React from 'react';
import backarrow from './assets/back-arrow.svg';
import rightarrow from './assets/right-arrow.svg';
import rootifyscreenshot from './assets/rootfiy-screenshot.png';
import eatupscreenshot1 from './assets/eatup-screenshot-1.png';
import eatupscreenshot2 from './assets/eatup-screenshot-2.png';
import profile from './assets/profile.gif';
import github from './assets/github.png';
import linkedin from './assets/linkedin.png'
import './App.css';


const info = [
  {/* This entry is used to display profile info */},
  {
    imgUrl: rootifyscreenshot, title: "Rootify", siteUrl: 'https://rootify.io/', gitUrl: 'https://github.com/tilevi/Rootify',
    text: "Rootify allows users with Spotify accounts to see their listening history visualized and explore new music. This project was built with Node.js, D3.js for data visualization, and the Spotify API for user info."
  },
  {
    imgUrl: eatupscreenshot1, title: "EatUp", imgUrl2: eatupscreenshot2, siteUrl: 'https://www.eatup.app/', 
    gitUrl: 'https://github.com/jolortiz/eatup_marketing_website',
    text: "EatUp is a mobile application that uses AI to help consumers find new places to eat in their area. EatUp is built with Python, Flask, PostgreSQL, React Native."
  },
  /* { imgUrl: "https://lh3.googleusercontent.com/oxPeODS2m6rYIVbhcQChRtOWEYeGDwbeeeB1cDU2o_WYAVPU61VIgx-_6BAh5gSL8Sw=h900", 
    title: "Bad Kat", text: "Rootify is a group project created by some classmates and I for the class CMPS115, Software" + 
    " Enginnering. The purpose of the project was to build a functional website that allows users to see their listening" + 
    " history visualized and explore new music based on their music taste. For this project we used node.js for runtime" + 
    " environment, d3.js for data visualization, and the Spotify API for data. (click the logo to use the site)"
  },
  {imgUrl: "https://i.pinimg.com/736x/07/c3/45/07c345d0eca11d0bc97c894751ba1b46.jpg", title: 'Hero Kitty'},
  {imgUrl: "https://ehealthforum.com/health/images/avatars/11699147425707699031013.jpeg", title: 'Gwen'} */
];

const ImageSlide = ({ index }) => {
  return <div>
    { info[index].imgUrl2 === undefined ? 
      <img className="slide" src={info[index].imgUrl} alt={info[index].title}/> : 
      <div className="slide-container">
        <img className="slide-container__half" src={info[index].imgUrl} alt={info[index].title}/>
        <img className="slide-container__half" src={info[index].imgUrl2} alt={info[index].title}/>
      </div>
    }
    <div className="slide__title">
      <a href={info[index].siteUrl} target="_blank"><h2>{info[index].title}</h2></a>
      <a href={info[index].gitUrl} target="_blank"><img className="slide__github" src={github}/></a>
    </div>
    <p>{info[index].text}</p>
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
              <div className="profile">
                <img className="profile__img" src={profile}/>
                <h1>Jonathan Ortiz</h1>
                <h2>Full Stack Developer</h2>
                <ul className="profile__list">
                  <li>Experienced building Web and Mobile Applications.</li>
                  <li>B.S. in Computer Science from the University of California, Santa Cruz class of 2018.</li>
                  <li>Passion for creating intuitive, dynamic user experiences.</li>
                </ul>
                <div>
                  <a href="https://github.com/jolortiz" target="_blank"><img className="profile__link" src={github}/></a>
                  <a href="https://www.linkedin.com/in/jonathan-ortiz-1254b4144/" target="_blank"><img className="profile__link" src={linkedin}/></a>
                </div>
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
