import React, { useEffect, useState } from 'react'
import { fetchPokemonImage } from '../../services/PokemonFetch';

export default function Pokémon({ pokemon }) {
    const [image, setImage] = useState('')

  const getImage = async () => {
    const result = await fetchPokemonImage(pokemon)
    setImage(result)
  }
  useEffect(() => {
      getImage()
  })

  return (
    <div>
      <h1>{pokemon}</h1>
      <img src={ image }alt={ image } />
    </div>
  )
}
