import React from 'react';
import '../App.css';
import './MainSection.css';
import Cards from './Cards';
import { Button } from './Button';
import Image1 from '../assets/img1.jpg';
import Image2 from '../assets/img2.jpg';
import Image3 from '../assets/img3.jpg';

function MainSection() {

  const clients = [
    {
        name: 'Tijana Mikić',
        text: 'Sve dostupno na jednom mestu!',
        src: Image1
    },
    {
        name: 'Bojana Ilić',
        text: 'Uvek tu kada mi zatreba!',
        src: Image2
    },
    {
        name: 'Ana Lazarević',
        text: 'Jako brzo i efikasno!',
        src: Image3
    }
];  
  return (
    <>
    <div className='main-container'>
      <image src='../assets/bckg.jpg'/>
      <h1>DOMOVI ZDRAVLJA</h1>
      <p>Brinite o svom zdravlju</p>
      <div className='main-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
         LOKACIJE
        </Button>
      </div>
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
        <Cards title='ŠTA KAŽU O NAMA?' data1={clients} type='clients'></Cards>
    </div>
    </>
  );
}

export default MainSection;