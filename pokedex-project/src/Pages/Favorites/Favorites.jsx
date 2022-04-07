import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'

export default function Favorites() {
  const pokemons = JSON.parse(localStorage.getItem('favoritePokemon')) || []
  return (
    <>
        <Header />
        <div className='pokedex-container'>
        {
            pokemons && pokemons.map((pokemon) => (
                <div className={`pokemon-card card-${pokemon.types[0]}`}>
                    <Link to={`/pokemon/${pokemon.id}`}><h1>{ pokemon.name }</h1></Link>
                    <h2>{ `#${pokemon.id}` }</h2>
                    <Link to={`/pokemon/${pokemon.id}`}>
                        <img 
                            src={ pokemon.sprite }
                            alt={ pokemon.name }
                            className='pokemon-image'
                        />
                    </Link>
                    <div className='types-container' >
                        {
                            pokemon && pokemon.types.map((type) => (
                            <p className={ `type ${type}` }>{ type }</p>
                        ))
                        }
                    </div>
                </div>
            ))
        }
        </div>
    </>
  )
  
};
