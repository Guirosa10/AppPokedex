import React, { useEffect, useState } from 'react';
import './Pokémon.css';

export default function Pokémon({ pokemon }) {
  const [image, setImage ] = useState('')

  const getPkmImage = () => {
    const imageArtwork = pokemon.sprites.other['official-artwork'].front_default;
    setImage(imageArtwork)
  }

  useEffect(() => {
    getPkmImage()
  },[])

  return (
    <div className='pokemon-card'>
      <h1>{ pokemon.name }</h1>
      <h2>{ `#${pokemon.id}` }</h2>
      <img 
        src={ image }
        alt={ pokemon.name } />
      <div className='types-container' >
        {
          pokemon && pokemon.types.map((type) => (
            <p className={ `${type.type.name} ` }>{ type.type.name }</p>
          ))
        }
      </div>
    </div>
  )
}
