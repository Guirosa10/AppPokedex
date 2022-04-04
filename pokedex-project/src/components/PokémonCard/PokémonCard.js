import React, { useContext } from 'react'
import MyContext from '../../Context/MyContext'
import Pokémon from '../Pokémon/Pokémon'

export default function PokémonCard() {
  const { pokemons } = useContext(MyContext)
  return (
    <>
    {
      pokemons && React.Children.toArray(pokemons.map((pokemon) => (
        <Pokémon 
          pokemon={ pokemon } />
      )))
    }
    </>
  )
}
