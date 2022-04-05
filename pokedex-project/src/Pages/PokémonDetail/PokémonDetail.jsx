import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FavoriteButton from '../../components/FavoriteButton/FavoriteButton';
import Header from '../../components/Header/Header';

export default function PokémonDetail() {
  const { id } = useParams();
  const [pokemonDetail, setPokemonDetail] = useState([])
  const [image, setImage] = useState('');
 
  const fetchDetails = async () => {
      const results = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => res.json())
      setPokemonDetail(results)
      const imageArtwork = results.sprites.other['official-artwork'].front_default;
      setImage(imageArtwork)
  }

 

  useEffect(() => {
      fetchDetails()
  }, [])

  return (
    <>
      <Header />
        {
            pokemonDetail && (
                <>
                  <div>
                  <h1>{ pokemonDetail.name }</h1>
                  <FavoriteButton pokemonDetail={ pokemonDetail }/>
                  </div>
                  <p>{ pokemonDetail.height*10 }{' '}{ 'cm' }</p>
                  <p>{ pokemonDetail.weight/10 }{' '}{ 'kg' }</p>
                  <img src={ image } alt={ pokemonDetail.name } />
                  <div>
                    {
                    pokemonDetail.abilities?.map((abi) => <p key={abi.ability.name}>{ abi.is_hidden === true ? ' Hidden ability : ' : 'Regular Ability : ' }{abi.ability.name}</p> )
                    }
                  </div>
                  
                  <div>
                        {
                            pokemonDetail.stats?.map((stat) => 
                              <p key={stat.stat.name}>{ `${ stat.stat.name } ${stat.base_stat}` }</p>)
                        }
                  </div>
                  {
                    pokemonDetail.types?.map((type) => (
                    <p 
                      key={ type.type.name }
                      className={ `${type.type.name} ` }>{ type.type.name }</p>
                    ))
                  }
                </>
            )
        }
    </>
  )
};
