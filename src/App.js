import React from 'react';
import backarrow from './assets/back-arrow.svg';
import rightarrow from './assets/right-arrow.svg';
import rootifyscreenshot from './assets/rootify-screenshot.png';
import eatupscreenshot1 from './assets/eatup-screenshot-1.png';
import eatupscreenshot2 from './assets/eatup-screenshot-2.png';
import profile from './assets/headshot2018.png';
import github from './assets/github.png';
import linkedin from './assets/linkedin.png'
import './App.css';

import Image from './Image/index.js';

/*
~~ A simple react native app to show some of my recent work.
~~ Jonathan Ortiz 2019
*/

// my db
const MYDB = [
  {/* This entry is used to display profile info */},
  {
    imgUrl: eatupscreenshot1, title: "EatUp", imgUrl2: eatupscreenshot2, siteUrl: 'https://www.eatup.app/', 
    gitUrl: 'https://github.com/jolortiz/eatup_marketing_website',
    text: "EatUp is a mobile application for Android and iOS that uses AI to help consumers find new places to eat in their area. EatUp is built with React Native, Python, Flask, and PostgreSQL."
  },
  {
    imgUrl: rootifyscreenshot, title: "Rootify", siteUrl: 'https://rootify.io/', gitUrl: 'https://github.com/tilevi/Rootify',
    text: "Rootify allows users with Spotify accounts to see their listening history visualized and explore new music. This project was built with Node.js, D3.js for data visualization, and the Spotify API for user info."
  },
  {
    links: [
      {
        title: 'Data Visulization using D3.js', siteUrl: 'https://jolortiz.github.io/EducationVotingforHispanicsinUS/',
        gitUrl: 'https://github.com/jolortiz/EducationVotingforHispanicsinUS'
      },
      {
        title: 'Website for the Los Angeles Lakers', siteUrl: 'https://www.nba.com/lakers/'
      },
      {
        title: 'Website for the South Bay Lakers', siteUrl: 'https://southbay.gleague.nba.com'
      },
      {
        title: 'Website for Lakers Gaming', siteUrl: 'https://lakersgaming.nba.com'
      },
    ]
  }
];

const ImageSlide = ({ index }) => {
  const customStyles = {
    maxWidth: (MYDB[index].title === "EatUp") ? "420px" : "840px",
  };
  return <div style={customStyles}>
    { MYDB[index].imgUrl2 === undefined ? 
      <Image className="slide" src={MYDB[index].imgUrl} alt={MYDB[index].title}/> : 
      <div className="slide-wrapper">
        <div className="slide-container">
          <Image className="slide-container__half" src={MYDB[index].imgUrl} alt={MYDB[index].title}/>
        </div>
        <div className="slide-container">
          <Image className="slide-container__half" src={MYDB[index].imgUrl2} alt={MYDB[index].title}/>
        </div>
      </div>
    }
    <div className="slide__title">
      <a href={MYDB[index].siteUrl} target="_blank" rel="noopener noreferrer"><h2>{MYDB[index].title}</h2></a>
      <a href={MYDB[index].gitUrl} target="_blank" rel="noopener noreferrer"><img className="slide__github" src={github} alt="GitHub"/></a>
    </div>
    <p className="slide__text">{MYDB[index].text}</p>
  </div>;
};

const LinksList = ({ index }) => {
  const items = MYDB[index].links.map(function(item){
    return <li key={item.title}>
      <a href={item.siteUrl} target="_blank" rel="noopener noreferrer"><h2>{item.title}</h2></a>
    </li>;
  });
  return <div className="list">
    <h1>Projects/Websites/Work:</h1>
    <ul>
      {items}
    </ul>
  </div>;
};

const ProfileSlide = ({ index }) => {
  return <div className="profile">
    <Image className="profile__img" src={profile} alt="Profile"/>
    <h1>Jonathan Ortiz</h1>
    <h2>Software Engineer</h2>
    <ul className="profile__list">
      <li>Experienced building Web and Mobile Applications</li>
      <li>B.S. in Computer Science from the University of California, Santa Cruz class of 2018</li>
      <li>Passion for creating, learning, and collaborating</li>
    </ul>
    <div>
      <a href="https://github.com/jolortiz" target="_blank" rel="noopener noreferrer"><img className="profile__link" src={github} alt="GitHub"/></a>
      <a href="https://www.linkedin.com/in/jonathan-ortiz-1254b4144/" target="_blank" rel="noopener noreferrer"><img className="profile__link" src={linkedin} alt="LinkedIn"/></a>
    </div>
  </div>;
}

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
    const lastIndex = MYDB.length - 1;
    const { currentIndex } = this.state;
    const shouldResetIndex = currentIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentIndex - 1;
    this.setState({
      currentIndex: index
    });
  }
  nextSlide() {
    const lastIndex = MYDB.length - 1;
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
            { this.state.currentIndex === 0 &&
              <ProfileSlide index={this.state.currentIndex}/>
            }
            { (this.state.currentIndex === 1 || this.state.currentIndex === 2) &&
              <ImageSlide index={this.state.currentIndex}/>
            }
            { this.state.currentIndex === 3 &&
              <LinksList index={this.state.currentIndex}/>
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
