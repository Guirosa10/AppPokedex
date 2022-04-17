import React, { useContext } from 'react';
import MyContext from '../../Context/MyContext';
import { fetchByIndex } from '../../services/PokedexFetch';
import './LoadNextButton.css';

export default function LoadNextButton({ setNext, next }) {
  const { pokemons, setPokemons } = useContext(MyContext);

  const fetchNextPokemon = async () => {
    const results = await fetchByIndex(next);
    setPokemons([...pokemons, ...results]);
    setNext(next+20);
  
  }

  return (
    <button type='button'onClick={ fetchNextPokemon }>Load Next</button>
  )
};
