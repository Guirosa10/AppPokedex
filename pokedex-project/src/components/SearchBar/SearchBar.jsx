import React, { useContext, useState } from 'react';
import MyContext from '../../Context/MyContext';
import './SearchBar.css';
import {fetchPokemonImage} from '../../services/PokemonFetch';

export default function SearchBar() {
  const { setPokemons } = useContext(MyContext);
  const [searchInput, setSearchInput] = useState('');


  const fetchNextPokemon = async () => {
      if(searchInput.length > 0){
        setPokemons([])
        const { results } = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1126').then((res) => res.json());
        const filteredPkms = results.filter((pokemonName) => pokemonName.name.includes(searchInput.toLowerCase()))
        const populatePokemon = (allPokemons) => {
            allPokemons.forEach(async (pokemon) => {
            const response = await fetchPokemonImage(pokemon.name)
            setPokemons(allpokes => [...allpokes, response])
            })
        }
        populatePokemon(filteredPkms)
      }
      else {
        window.alert('Insira algum nome para começar a pesquisa')
      }
  }


  return (
    <div className='search-container'>
        <input 
            type='search' 
            placeholder='Searching for a Pokémon?' 
            value={ searchInput }
            onChange={ ({ target: { value } }) => setSearchInput(value) }
        />
        <input
            className='search-button'
            type='button' 
            value='Search Pokémon'
            onClick={ fetchNextPokemon }
        />
    </div>
  )
};
