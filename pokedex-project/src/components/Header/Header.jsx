import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  const options = ['home', 'search']
  return (
    <header>
        <h1 className='main-title'>Pokédex App</h1>
        <ul className='header-list'>
            {
                options.map((option) => (
                    <Link to={option === 'home' ? '/' : '/search'}>
                        <li><button type='button'>{option}</button></li>
                    </Link>
                ))
            }
        </ul>
    </header>
  )
};
