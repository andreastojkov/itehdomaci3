import React from 'react';
import '../App.css';
import './MainSection.css';
import Cards from './Cards';

function MainSection() {
  return (
    <>
    <div className='main-container'>
      <image src='../assets/bckg.jpg'/>
      <h1>DOMOVI ZDRAVLJA</h1>
      <p>Brinite o svom zdravlju</p>
    </div>
    <div className='main-text'>
    <h1>KO SMO MI</h1>
    <h3>portal domovi zdravlja</h3>
      <p>
      Obezbedite sebi zdrav život.
      </p>
      <p>
      Pronađite Vama najbliži dom zdravlja.
      </p>
    </div>
    <div className='main-clients'>
      <Cards></Cards>
    </div>
    </>
  );
}

export default MainSection;