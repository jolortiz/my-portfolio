import React from 'react';
import rootifyscreenshot from './assets/rootify-screenshot.png';
import eatupscreenshot1 from './assets/eatup-screenshot-1.png';
import eatupscreenshot2 from './assets/eatup-screenshot-2.png';
import profile from './assets/headshot2018.png';
import github from './assets/github.png';
import linkedin from './assets/linkedin.png'
import d3screenshot1 from './assets/d3-screenshot-1.png';
import d3screenshot2 from './assets/d3-screenshot-2.png';
import lakersscreenshot from './assets/lakers-capture.png'

import './App.css';

import Image from './components/Image/index.js';

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
    imgUrl: eatupscreenshot1, title: "EatUp", imgUrl2: eatupscreenshot2, siteUrl: 'https://jolortiz.github.io/eatup_marketing_website/', 
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
    imgUrl: rootifyscreenshot, title: "Rootify", gitUrl: 'https://github.com/tilevi/Rootify',
    text: "Rootify allows users with Spotify accounts to see their listening history visualized and explore new music. This project was built with Node.js, D3.js for data visualization, and the Spotify API for user info."
  }
];

// template for the project slides
const ImageSlide = ({ index }) => {
  let maxWidth, backgroundColor, color; // these max-widths keep containers in check
  switch (MYDB[index].id) {
    case "eatup":
      maxWidth = "420px";
      backgroundColor = "#ff7833";
      break;
    case "d3":
      maxWidth = "600px";
      backgroundColor = "#ffffff";
      color = "#000000";
      break;
    case "rootify":
      maxWidth = "605px";
      backgroundColor = "#4B9877";
      break;
    case "lakers":
      maxWidth = "605px";
      backgroundColor = "#745c97";
      break;
    default:
        maxWidth = "420px";
  }
  const proj__extra = {
    backgroundColor: backgroundColor, color: color,
  };
  const container__extra = {
    maxWidth: maxWidth,
  };
  return <div className="section proj" style={proj__extra}>
    <div className="container" style={container__extra}>
      { MYDB[index].imgUrl2 === undefined ? 
        <Image className="proj__img" src={MYDB[index].imgUrl} alt={MYDB[index].title}/> : 
        <div className="proj__double">
          <div className="proj__container">
            <Image className="proj__img--half" src={MYDB[index].imgUrl} alt={MYDB[index].title}/>
          </div>
          <div className="proj__container">
            <Image className="proj__img--half" src={MYDB[index].imgUrl2} alt={MYDB[index].title}/>
          </div>
        </div>
      }
      <div className="proj__title">
        { MYDB[index].siteUrl !== undefined ? 
          <a href={MYDB[index].siteUrl} target="_blank" rel="noopener noreferrer">
            <h2>{MYDB[index].title}</h2></a> : 
          <h2>{MYDB[index].title}</h2>
        }
        { MYDB[index].gitUrl !== undefined ? 
          <a href={MYDB[index].gitUrl} target="_blank" rel="noopener noreferrer">
            <img className="proj__github" src={github} alt="GitHub"/></a>: null
        }
      </div>
      <p className="proj__text">{MYDB[index].text}</p>
      { MYDB[index].links !== undefined ? <LinksList index={index}/> : null }
    </div>
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
  return <div className="section">
    <div className="container profile">
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
    </div>
  </div>;
}

// my one page app
export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <ProfileSlide index={0}/>
        <ImageSlide index={1}/>
        <ImageSlide index={2}/>
        <ImageSlide index={3}/>
        <ImageSlide index={4}/>
      </div>
    );
  }
}
