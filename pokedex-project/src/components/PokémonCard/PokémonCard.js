import React from 'react'
import Pokémon from '../Pokémon/Pokémon'

export default function PokémonCard({pokemons}) {
  return (
    <>
    {
      pokemons && React.Children.toArray(pokemons.map((pokemon) => (
        <Pokémon 
          pokemon={ pokemon.name } />
      )))
    }
    </>
  )
}
