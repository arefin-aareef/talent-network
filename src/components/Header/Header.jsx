import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h2>Talent Network</h2>
            <nav>
                <ActiveLink to='/'>Home</ActiveLink>
                <ActiveLink to='/statistics'>Statistics</ActiveLink>
                <ActiveLink to='/jobs'>Applied Jobs</ActiveLink>
                <ActiveLink to='/blog'>Blog</ActiveLink>
            </nav>
            <button>Start Applying</button>
        </div>
    );
};

export default Header;