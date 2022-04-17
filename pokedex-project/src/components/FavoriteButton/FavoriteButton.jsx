import React, { useEffect, useState, useContext } from 'react'
import MyContext from '../../Context/MyContext';
import './FavoriteButton.css';
import { Icon, icon } from '@iconify/react';

export default function FavoriteButton() {
  const [favorites, setFavorites] = useState([]);
  const [favoriteIcon, setFavoriteIcon] = useState(false);
  const { pokemonDetail } = useContext(MyContext);
  const storage = JSON.parse(localStorage.getItem('favoritePokemon')) || [];

  useEffect(() => {
    const checkFavoriteness = () => {
      const filterStorage = storage?.some((item) => item?.id === pokemonDetail.id);
        if(filterStorage){
          setFavoriteIcon(true)
        }
        if(!filterStorage){
          setFavoriteIcon(false)
        }
    }
    checkFavoriteness()
  }, [pokemonDetail])

  const handleClick = () => {
    const filterStorage = storage?.some((item) => item.id === pokemonDetail.id);
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
        sprite: pokemonDetail?.sprites.other['official-artwork'].front_default,
        types: pokemonDetail?.types.map((type) => type.type.name ),
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
    <span
        type='button'
        onClick={ handleClick }
    >
      {
        favoriteIcon ? <img 
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1026px-Pok%C3%A9_Ball_icon.svg.png' 
          className="heart"
          alt='heart'
          /> : 
          <span className='heartbutton'><Icon classname='fa-heart' icon="mdi:pokeball" style={{ fontSize: '60px' }}/></span>
      }
      
    </span>
  )
};

