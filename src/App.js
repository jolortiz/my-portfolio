import React from 'react';
import backarrow from './assets/back-arrow.svg';
import rightarrow from './assets/right-arrow.svg';
import rootifyscreenshot from './assets/rootify-screenshot.png';
import eatupscreenshot1 from './assets/eatup-screenshot-1.png';
import eatupscreenshot2 from './assets/eatup-screenshot-2.png';
import profile from './assets/headshot2018.png';
import github from './assets/github.png';
import linkedin from './assets/linkedin.png'
import d3screenshot1 from './assets/d3-screenshot-1.png';
import d3screenshot2 from './assets/d3-screenshot-2.png';
import lakersscreenshot from './assets/lakers-screenshot.png'

import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from './components/Image/index.js';
import Slider from "react-slick";

/*
~~ A simple react app to show some of my recent work.
~~ Jonathan Ortiz 2019
*/

// my information
const MYDB = [
  {
    gitUrl: 'https://github.com/jolortiz', linkedInUrl: 'https://www.linkedin.com/in/jonathan-ortiz-1254b4144/', name: "Jonathan Ortiz", title: "Software Engineer", point1: "Experienced building and maintaining Web and Mobile Applications", point2: "B.S. in Computer Science from the University of California, Santa Cruz class of 2018", point3: "Passion for creating, learning, and collaborating"
  },
  {
    id: "eatup",
    imgUrl: eatupscreenshot1, title: "EatUp", imgUrl2: eatupscreenshot2, siteUrl: 'https://www.eatup.app/', 
    gitUrl: 'https://github.com/jolortiz/eatup_marketing_website',
    text: "EatUp is a mobile application for Android and iOS that uses AI to help consumers find new places to eat in their area. EatUp is built with React Native, Python, Flask, and PostgreSQL."
  },
  {
    id: "lakers", 
    imgUrl: lakersscreenshot, title: "Lakers Websites",
    text: "Lakers orginization websites include Los Angeles Lakers, South Bay Lakers, and Lakers Gaming. Lakers.com uses Drupal for content management and front end libaries jQuery and Bootstrap, while the South Bay Lakers and Lakers Gaming sites run on Wordpress.",
    links: [
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
  },
  {
    id: "d3",
    imgUrl: d3screenshot1, title: "D3.js Projects", imgUrl2: d3screenshot2,
    text: "These are two data visualization projects built with the Javascript library D3. The left image is an interactive graphical representation of Hispanic education and voting statistics, while the right is a map representation of projected population in Colombia.",
    links: [
      {
        title: "Education & Voting Power of Hispanics", siteUrl: 'https://jolortiz.github.io/EducationVotingforHispanicsinUS/',
        gitUrl: 'https://github.com/jolortiz/EducationVotingforHispanicsinUS'
      },
      {
        title: "Projected Colombia Population 2020", siteUrl: 'https://jolortiz.github.io/ColombiaPopulation2020/colombia.html',
        gitUrl: 'https://github.com/jolortiz/ColombiaPopulation2020'
      }
    ]
  },
  {
    id: "rootify",
    imgUrl: rootifyscreenshot, title: "Rootify", siteUrl: 'https://rootify.io/', gitUrl: 'https://github.com/tilevi/Rootify',
    text: "Rootify allows users with Spotify accounts to see their listening history visualized and explore new music. This project was built with Node.js, D3.js for data visualization, and the Spotify API for user info."
  }
];

// template for the project slides
const ImageSlide = ({ index }) => {
  let maxWidth;
  switch (MYDB[index].id) {
    case "eatup":
      maxWidth = "420px";
      break;
    case "d3":
      maxWidth = "900px";
      break;
    case "rootify":
      maxWidth = "840px";
      break;
    case "lakers":
      maxWidth = "605px";
      break;
    default:
        maxWidth = "420px";
  }
  const customStyles = {
    maxWidth: maxWidth, margin: "auto",
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
      { MYDB[index].siteUrl !== undefined ? 
        <a href={MYDB[index].siteUrl} target="_blank" rel="noopener noreferrer"><h2>{MYDB[index].title}</h2></a> : 
        <h2>{MYDB[index].title}</h2>
      }
      { MYDB[index].gitUrl !== undefined ? 
        <a href={MYDB[index].gitUrl} target="_blank" rel="noopener noreferrer"><img className="slide__github" src={github} alt="GitHub"/></a>: null
      }
    </div>
    <p className="slide__text">{MYDB[index].text}</p>
    { MYDB[index].links !== undefined ? <LinksList index={index}/> : null }
  </div>;
};

// bullet list of links under slide text description
const LinksList = ({ index }) => {
  const items = MYDB[index].links.map(function(item){
    return <li key={item.title}>
      <a className="display-inline" href={item.siteUrl} target="_blank" rel="noopener noreferrer"><h3 className="list__text">{item.title}</h3></a>
      { item.gitUrl !== undefined ? 
        <a className="display-inline" href={item.gitUrl} target="_blank" rel="noopener noreferrer"><img className="list__github" src={github} alt="GitHub"/></a> : null
      }
    </li>;
  });
  return <div className="list">
    <ul>
      {items}
    </ul>
  </div>;
};

// this is the first slide. contains bio info
const ProfileSlide = ({ index }) => {
  return <div className="profile">
    <Image className="profile__img" src={profile} alt="Profile"/>
    <h1>{MYDB[index].name}</h1>
    <h2>{MYDB[index].title}</h2>
    <ul className="profile__list">
      <li>{MYDB[index].point1}</li>
      <li>{MYDB[index].point2}</li>
      <li>{MYDB[index].point3}</li>
    </ul>
    <div>
      <a href={MYDB[index].gitUrl} target="_blank" rel="noopener noreferrer"><img className="profile__link" src={github} alt="GitHub"/></a>
      <a href={MYDB[index].linkedInUrl} target="_blank" rel="noopener noreferrer"><img className="profile__link" src={linkedin} alt="LinkedIn"/></a>
    </div>
  </div>;
}

// my one page app
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
    this.slider = React.createRef();
  }
  prev() {
    this.slider.slickPrev();
  }
  next() {
    this.slider.slickNext();
  }
  render() {
    var settings = {
      accessibility: false,
      dots: false,
      arrows: false,
      /* adaptiveHeight: true, */
      className: "slider"
    };
    return (
      <div className="container">
        <div className="panel">
          <img className="panel__button" src={backarrow} onClick={this.prev} alt="Back"/>
        </div>
        <Slider ref={c => (this.slider = c)} {...settings}>
          <ProfileSlide index={0}/>
          <ImageSlide index={1}/>
          <ImageSlide index={2}/>
          <ImageSlide index={3}/>
          <ImageSlide index={4}/>
        </Slider>
        <div className="panel right">
          <img className="panel__button" src={rightarrow} onClick={this.next} alt="Next"/>
        </div>
      </div>
    );
  }
}

/* export default class App extends React.Component {
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
            { this.state.currentIndex > 0 &&
              <ImageSlide index={this.state.currentIndex}/>
            }
          </div>
          <div className="panel right">
            <img className="panel__button" src={rightarrow} onClick={this.nextSlide} alt="Next"/>
          </div>
        </div>
      </div>
    );
  }
} */