import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            DOMOVI ZDRAVLJA
            <i class="fas fa-dom"></i>
          </Link>
          <ul className='nav-menu'>
            <li className='nav-item'>
              <Link to='/' className='nav-links'>
                Početna
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'>
                Usluge
              </Link>
            </li>
            <li>
              <Link
                to='/appointments'
                className='nav-links'>
                Lokacije
              </Link>
            </li> 
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;