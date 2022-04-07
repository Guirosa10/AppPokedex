import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Pokémon.css';

export default function Pokémon({ pokemon }) {
  const [image, setImage ] = useState('')

  const getPkmImage = () => {
    const imageArtwork = pokemon.sprites.other['official-artwork'].front_default;
    setImage(imageArtwork)
  }

  function upperCaseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  useEffect(() => {
    getPkmImage()
  },[])

  return (
    <div className={ `pokemon-card card-${pokemon.types[0].type.name}` }>
      <Link to={`/pokemon/${pokemon.id}`} >
        <h1 className='pokemon-name'>{ upperCaseFirstLetter(pokemon.name) }</h1>
      </Link>
      <h2>{ `#${pokemon.id}` }</h2>
      <Link to={`/pokemon/${pokemon.id}`} >
      <img 
        src={ image }
        alt={ pokemon.name }
        className='pokemon-image'
      />
      </Link>
      <div className='types-container' >
        {
          pokemon && pokemon.types.map((type) => (
            <p className={ `type ${type.type.name} ` }>{ type.type.name }</p>
          ))
        }
      </div>
    </div>
  )
}
