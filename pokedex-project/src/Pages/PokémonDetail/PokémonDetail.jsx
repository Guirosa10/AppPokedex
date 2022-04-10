/* eslint-disable no-control-regex */
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
  const [bio, setBio] = useState('')
 
  const fetchDetails = async () => {
      if(id < 1127){
        const results = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => res.json());
        console.log(results);
        const { flavor_text_entries } = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`).then((res) => res.json());
        setPokemonDetail(results);
        setBio(flavor_text_entries[0].flavor_text);
        const imageArtwork = results.sprites.other['official-artwork'].front_default;
        setImage(imageArtwork);
      }
      else {
        const results = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => res.json());
        setPokemonDetail(results);
        const imageArtwork = results.sprites.other['official-artwork'].front_default;
        setImage(imageArtwork);
      }
  }

 const upperCaseFirstLetter = (string) => {
   if(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
   }
   return string;
  }


 

  useEffect(() => {
    setLoadingState(true)
    fetchDetails()
    setLoadingState(false)
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
            !loadingState && (
                  <div className='pokemon-detail-card'>
                    <div className='pokemon-and-details' >
                      <div className='pokemon-detail-name-container'>
                        <h1 className='details-title'>{ upperCaseFirstLetter(pokemonDetail?.name) }</h1>
                        <FavoriteButton />
                      </div>
                      <div className="image-container-details">
                        <img
                          className='detail-image-container'
                          src={ image } 
                          alt={ pokemonDetail.name } />
                      </div>
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
                    <div className='info-container'>
                      <div className="bio-container">
                        {
                          bio && (
                            <>
                              <h2>Bio</h2>
                              <p>{ bio.replace(//g, '') }</p>
                            </>
                          )
                        }
                      <h2>Abilities</h2>
                      {
                        pokemonDetail.abilities?.map((abi) => 
                          <p 
                            className='ability' 
                            key={abi.ability.name}>
                              { abi.is_hidden === true ? `${upperCaseFirstLetter(abi.ability.name)} (hidden)` : upperCaseFirstLetter(abi.ability.name) }{}</p> )
                      }
                      <p className='height-width'>Height:{' '}{ pokemonDetail.height/10 }{' '}{ 'm' }</p>
                      <p className='height-width'>Weight{' '}{ pokemonDetail.weight/10 }{' '}{ 'kg' }</p>
                      </div>
                      
                       <div className='stats-container'>
                          {
                            pokemonDetail.stats?.map((stat) => (
                              <>
                                <p className='stats-title'>
                                  {
                                     upperCaseFirstLetter(stat.stat?.name) 
                                  }
                                </p>
                                <p 
                                  key={stat.stat.name}
                                  className='stats-bar'
                                  style={{width : `${stat.base_stat}%`}}
                                >
                                </p>
                              </>)
                              )
                          }
                      </div>
                   
                    </div>
                  
                   
                    <div className='evolutions-container'>
                      <EvolutionContainer id={ id } />
                      
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
