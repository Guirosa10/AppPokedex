import React, { useContext } from 'react';
import MyContext from '../../Context/MyContext';
import { fetchPokemonImage } from '../../services/PokemonFetch';
import './LoadNextButton.css';

export default function LoadNextButton({ setNext, next }) {
  const { setPokemons } = useContext(MyContext);

  const fetchNextPokemon = async () => {
    const results = await fetch(next).then((res) => res.json())
    setNext(results.next)
    const populatePokemon = (allPokemons) => {
      allPokemons.forEach(async (pokemon) => {
          const response = await fetchPokemonImage(pokemon.name)
          setPokemons(allpokes => [...allpokes, response])
      })
    }
    populatePokemon(results.results)
  }

  return (
    <button type='button'onClick={ fetchNextPokemon }>Load Next</button>
  )
};
