import React, { useEffect, useState } from 'react';
import PokémonCard from '../../components/PokémonCard/PokémonCard';
import { fetchKantoDex } from '../../services/PokedexFetch';
import './MainPage.css';

export default function MainPage() {
    const [pokemons, setPokemons] = useState([]);
    const fetchPokemons = async () => {
        const results = await fetchKantoDex()
        setPokemons(results)
    }

    useEffect(() => {
        fetchPokemons()
    },[])

  return (
      <div className='pokedex-container'>
          <PokémonCard pokemons={ pokemons }/>
      </div>
  )
};
