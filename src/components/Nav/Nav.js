import './Nav.scss';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <ul className='nav'>
      <li className='nav__item'>
        <Link className='nav__link' to='/categories'>Часть 1</Link>
      </li>
      <li className='nav__item'>
        <Link className='nav__link' to='/auth'>Часть 2</Link>
      </li>
    </ul>
  );
}

export default Nav;
