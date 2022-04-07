import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import EvolutionContainer from '../../components/EvolutionContainer/EvolutionContainer';
import FavoriteButton from '../../components/FavoriteButton/FavoriteButton';
import Header from '../../components/Header/Header';
import Loading from '../../components/Loading/Loading';
import MyContext from '../../Context/MyContext';
import './PokémonDetail.css';

export default function PokémonDetail() {
  const { id } = useParams();
  const { pokemonDetail, setPokemonDetail } = useContext(MyContext);
  const [image, setImage] = useState('');
  const [loadingState, setLoadingState] = useState(false)
 
  const fetchDetails = async () => {
      const results = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => res.json())
      setPokemonDetail(results)
      const imageArtwork = results.sprites.other['official-artwork'].front_default;
      setImage(imageArtwork)
  }

 

  useEffect(() => {
    setLoadingState(true)
    fetchDetails()
    setTimeout(() => {
      setLoadingState(false)
    }, 1000)
  }, [id])

  return (
    <>
      <Header />
        {
          loadingState && (
            <Loading />
          )
        }
        {
            pokemonDetail && (
                  <div className='pokemon-detail-card'>
                    <div className='pokemon-and-details' >
                      <div className='pokemon-detail-name-container'>
                        <h1 className='details-title'>{ pokemonDetail.name }</h1>
                        <FavoriteButton />
                      </div>
                      <img
                        className='detail-image-container'
                        src={ image } 
                        alt={ pokemonDetail.name } />
                      <div className='type-container'>
                        {
                          pokemonDetail.types?.map((type) => (
                            <p
                            key={ type.type.name }
                            className={ `${type.type.name} ` }>{ type.type.name }
                            </p>
                          ))
                        }
                      </div>
                    </div>
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
                    <div className='evolutions-container'>
                      <EvolutionContainer id={ id } />
                      <p>Height:{' '}{ pokemonDetail.height/10 }{' '}{ 'm' }</p>
                      <p>Weight{' '}{ pokemonDetail.weight/10 }{' '}{ 'kg' }</p>
                    </div>
                  </div>
            )
        }
        <Link to={ id > 1 ? `/pokemon/${id - 1}` : `/pokemon/${id}`}>
          <button className='next-button' type='button' >
            Previous
          </button>
        </Link>
        <Link to={ `/pokemon/${ Number(id) + 1 }`}>
          <button className='next-button' type='button' >
            Next
          </button>
        </Link>
    </>
  )
};
