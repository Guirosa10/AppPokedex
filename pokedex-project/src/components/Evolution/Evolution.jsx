import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { fetchPokemonImage } from '../../services/PokemonFetch'
import './Evolution.css';

function Evolution({pokemon}) {
  const [pokemonEvo, setPokemonEvo] = useState({})
  
  useEffect(() => {
    if(pokemon){
        const fetchPokemon = async () => {
            const result = await fetchPokemonImage(pokemon);
            setPokemonEvo(result)
        }
        fetchPokemon()
        console.log(pokemonEvo)
        
    }
    
  }, [pokemon])

  return (
    <>
        {
            pokemonEvo.name === pokemon && (
                <Link to={`/${pokemonEvo.id}`}>
                    <img 
                    className='evolution-chain'
                    src={ pokemonEvo.sprites.other['official-artwork'].front_default } alt={pokemonEvo.name}>
                 
                    </img>
                </Link>
            )
        }
    </>
  )
};

export default Evolution