import React, { useContext, useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Loading from '../../components/Loading/Loading';
/* import Filter from '../../components/Filters/Filter'; */
import LoadNextButton from '../../components/LoadNextButton/LoadNextButton';
import PokémonCard from '../../components/PokémonCard/PokémonCard';
import MyContext from '../../Context/MyContext';
import { fetchKantoDex } from '../../services/PokedexFetch';
import { fetchPokemonImage } from '../../services/PokemonFetch';
import './MainPage.css';

export default function MainPage() {
    const { setPokemons } = useContext(MyContext);
    const [next, setNext] = useState('');
    const [loadingState, setLoadingState]=useState(false);

    const fetchPokemons = async () => {
        setLoadingState(true);
        setPokemons([])
        const results = await fetchKantoDex()
        setNext(results.next);

        const populatePokemon = (allPokemons) => {
            allPokemons.forEach(async (pokemon) => {
                const response = await fetchPokemonImage(pokemon.name);
                setPokemons((allpokes) => [...allpokes, response]);
            })
        }
        populatePokemon(results.results)
        setTimeout(() => {
            setLoadingState(false);
        }, 1000)
    }

    useEffect(() => {
        fetchPokemons()
    }, [])

  return (
      <>
        <Header />
        {
            loadingState && 
            (
                <Loading />
            )
        }
        {
            !loadingState && (
                <>
                    <div className='pokedex-container'>
                        <PokémonCard />
                    </div>
                    <div className='next-container'>
                        <LoadNextButton setNext={ setNext } next={ next }/>
                    </div>
                </>
            
            )
        }
       
      </>
  )
};
