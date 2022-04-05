import React, { useEffect, useState } from 'react'

export default function FavoriteButton({ pokemonDetail }) {
  const [favorites, setFavorites] = useState([]);
  const [favoriteIcon, setFavoriteIcon] = useState(false);
  const storage = JSON.parse(localStorage.getItem('favoritePokemon')) || [];

  useEffect(() => {
    const filterStorage = storage.some((item) => item.id === pokemonDetail.id);
    if(filterStorage){
      setFavoriteIcon(true)
    }
    if(!filterStorage){
      setFavoriteIcon(false)
    }
  }, [])

  const handleClick = () => {
    const filterStorage = storage?.some((item) => item.id === pokemonDetail.id);
    console.log(filterStorage);
    if(!filterStorage){
      const obj = {
        name: pokemonDetail?.name,
        id: pokemonDetail?.id,
        hp: pokemonDetail?.stats[0].base_stat,
        attack: pokemonDetail?.stats[1].base_stat,
        defense: pokemonDetail?.stats[2].base_stat,
        sp_attack: pokemonDetail?.stats[3].base_stat,
        sp_defense: pokemonDetail?.stats[4].base_stat,
        speed: pokemonDetail?.stats[5].base_stat,
        sprite: pokemonDetail.sprites.other['official-artwork'].front_default,
        types: pokemonDetail.types.map((type) => type.type.name ),
      }

      setFavorites([...favorites, obj]);
      const newArray = [...storage, obj];
      localStorage.setItem('favoritePokemon', JSON.stringify(newArray))
    }
    if(filterStorage){
      const results = storage.filter((pokemon) => pokemon.id !== pokemonDetail.id);
      setFavorites(results);
      localStorage.setItem('favoritePokemon', JSON.stringify(results));
    }
  }

  useEffect(() => {
    const previousArray = JSON.parse(localStorage.getItem('favoritePokemon')) || [];
    const filterStorage = previousArray?.some((item) => item.id === pokemonDetail.id);
    if(filterStorage){
      setFavoriteIcon(true)
    }
    if(!filterStorage){
      setFavoriteIcon(false)
    }
  }, [favorites])

  return (
    <button 
        type='button'
        onClick={ handleClick }
    >
      {
        favoriteIcon ? <i className="gg-heart"></i> : <i className="gg-pokemon"></i>
      }
      
    </button>
  )
};
