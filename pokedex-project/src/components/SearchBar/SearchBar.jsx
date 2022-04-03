import React, { useContext, useState } from 'react';
import MyContext from '../../Context/MyContext';
import './SearchBar.css';
import {fetchPokemonImage} from '../../services/PokemonFetch';

export default function SearchBar({ setEnableNext }) {
  const { setPokemons } = useContext(MyContext);
  const [searchInput, setSearchInput] = useState('');


  const fetchNextPokemon = async () => {
      if(searchInput.length > 0){
        setEnableNext(false)
        setPokemons([])
        const { results } = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1126').then((res) => res.json());
        const filteredPkms = results.filter((pokemonName) => pokemonName.name.includes(searchInput))
        const populatePokemon = (allPokemons) => {
            allPokemons.forEach(async (pokemon) => {
            const response = await fetchPokemonImage(pokemon.name)
            setPokemons(allpokes => [...allpokes, response])
            })
        }
        populatePokemon(filteredPkms)
      }
  }


  return (
    <>
        <input 
            type='text' 
            placeholder='Search for Pokemon' 
            value={ searchInput }
            onChange={ (e) => setSearchInput(e.target.value) }
        />
        <input 
            type='button' 
            value='Search Pokemon'
            onClick={ fetchNextPokemon }
        />
    </>
  )
};
