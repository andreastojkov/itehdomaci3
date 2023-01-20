import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Image1 from '../assets/img1.jpg';
import Image2 from '../assets/img2.jpg';
import Image3 from '../assets/img3.jpg';

function Cards() {

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
    <div className='cards'>
      <h1>Rekli su o nama...</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem obj={clients[0]}/>
            <CardItem obj={clients[1]}/>
            <CardItem obj={clients[2]}/>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;