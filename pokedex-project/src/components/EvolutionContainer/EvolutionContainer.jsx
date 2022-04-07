import React, { useEffect, useState } from 'react'
import { fetchBySpecies } from '../../services/PokemonFetch';
import { fetchPokemonImage } from '../../services/PokemonFetch';
import Evolution from '../Evolution/Evolution';

function EvolutionContainer({id}) {
  const [evoUrl, setEvoUrl] = useState('');
  const [evoDetails, setEvoDetails] =  useState({});
  const [evolutionArray, setevolutionArray] = useState([]);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getEvoChainUrl = async () => {
        const url = await fetchBySpecies(id);
        setEvoUrl(url)
    }
    getEvoChainUrl()
    const getEvolutionsOnChainUrl = async () => {
        const { chain } = await fetch(evoUrl).then((res) => res.json());
        setEvoDetails(chain);
    };
    getEvolutionsOnChainUrl();

  }, [id, evoUrl])

  useEffect(() => {
    if(evoDetails.species){
        const { name } = evoDetails.species;
        const secondEvoCheck = typeof evoDetails.evolves_to[0];
        if(secondEvoCheck === 'undefined'){
            console.log(name)
        }
        else if(typeof evoDetails.evolves_to[0].evolves_to[0] === 'undefined' && secondEvoCheck !== 'undefined'){
            setevolutionArray([name, evoDetails.evolves_to[0].species.name]);
         
        }
        else{
            setevolutionArray(name)
            setevolutionArray([name, evoDetails.evolves_to[0].species.name, evoDetails.evolves_to[0].evolves_to[0].species.name])
        }
    }
  }, [evoDetails])

  return (
    <div>
      {
        evolutionArray && evolutionArray.map((evo) => (
          <Evolution key={ evo } pokemon={ evo }/>
        ))
      }
    </div>
  )
}

export default EvolutionContainer