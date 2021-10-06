import { React } from 'react';
import './Header.css';
import logo from '../../image/homepage.png';

const Header = () => {
    return(
        <header className="navbar">
            <a className='home-link' href='https://dortania.github.io/OpenCore-Install-Guide/' alt='OpenCore Install Guide'>
                <img className='logo' src={logo} alt='OpenCore Install Guide'/>
                <span className='site-name'>OpenCore Install Guide</span>
            </a>
            <div className='links'>
                <input className='search-input' />
            </div>
        </header>
    );
};

export default Header;