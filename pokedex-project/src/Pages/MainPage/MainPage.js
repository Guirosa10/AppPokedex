import React, { useContext, useEffect, useState } from 'react';
/* import Filter from '../../components/Filters/Filter'; */
import LoadNextButton from '../../components/LoadNextButton/LoadNextButton';
import PokémonCard from '../../components/PokémonCard/PokémonCard';
import SearchBar from '../../components/SearchBar/SearchBar';
import MyContext from '../../Context/MyContext';
import { fetchKantoDex } from '../../services/PokedexFetch';
import { fetchPokemonImage } from '../../services/PokemonFetch';
import './MainPage.css';

export default function MainPage() {
    const {pokemons, setPokemons} = useContext(MyContext);
    const [next, setNext] = useState('');
    const [enableNext, setEnableNext] = useState(true)

    const fetchPokemons = async () => {
        const results = await fetchKantoDex()
        setNext(results.next);

        const populatePokemon = (allPokemons) => {
            allPokemons.forEach(async (pokemon) => {
                const response = await fetchPokemonImage(pokemon.name)
                setPokemons((allpokes) => [...allpokes, response])
            })
        }
        populatePokemon(results.results)
    }

    useEffect(() => {
        fetchPokemons()
    },[])

  return (
      <>
        <header>
            <h1 className='main-title'>Pokédex App</h1>
            {/* <Filter /> */}
            <SearchBar setEnableNext={ setEnableNext }/>
        </header>
        <div className='pokedex-container'>
            <PokémonCard pokemons={ pokemons }/>
        </div>
        {
            enableNext && (
                <div className='next-container'>
                     <LoadNextButton setNext={ setNext } next={ next }/>
                </div>
            )
        }
        
      </>
  )
};
