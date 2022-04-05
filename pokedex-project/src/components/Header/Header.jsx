import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {

  return (
    <header>
        <h1 className='main-title'>Pokédex App</h1>
        <ul className='header-list'>
            <Link to='/'><li><button type='button'>Home</button></li></ Link>
            <Link to='/search'><li><button type='button'>Search</button></li></ Link>
            <Link to='/favorites'><li><button type='button'>Favorites</button></li></ Link>
        </ul>
    </header>
  )
};
