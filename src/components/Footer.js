import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Prijavite se da biste dobijali vaučere sa popustom na preglede:
        </p>
        <p className='footer-subscription-text'>
          Možete se odjaviti kad god budete želeli.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
             <Button buttonStyle='btn--outline' link='/'>Prijavi se</Button>
          </form>
        </div>
      </section>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <small class='website-rights'>DZ © 2023</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;