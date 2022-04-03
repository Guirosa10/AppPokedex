import React from 'react';
import './SearchBar.css';

export default function SearchBar() {
  return (
    <>
        <input type='text' placeholder='Search for Pokemon' />
        <input type='button' value='Search Pokemon'/>
    </>
  )
};
