import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import './BattlePage.css';

function BattlePage() {
  const [allFavoritePokes, setAllFavoritePokes] = useState(JSON.parse(localStorage.getItem('favoritePokemon')));
  const [count, setCount] = useState(0);
  const [currentPoke, setCurrentPoke] = useState({});
  const [attribute, setAttribute] = useState(0);
  const [comparisonAtt, setComparisonAtt]=useState('');

  useEffect(() => {
    setCurrentPoke(allFavoritePokes[count]);
  }, [count])

  const handleClick = ({target}) => {
    setAttribute(Number(target.value));
    setComparisonAtt(target.id)
  }

  return (
    <>
        <Header />
        {
          currentPoke && (
            <div className='card'>
              <h2>{ currentPoke.name }</h2>
              <img 
                src={ currentPoke.sprite } 
                alt={ currentPoke.name }>
              </img>
              <div>
                <input
                  type='radio'
                  name='stats'
                  id='hp' 
                  value={ currentPoke.hp }
                  onChange={ handleClick }
                />
                <label htmlFor='hp'>
                  { `Attack ${currentPoke.hp}` }
                </label>
              </div>
              <div>
                <input
                  onChange={ handleClick }
                  type='radio'
                  name='stats'
                  id='attack' 
                  value={ currentPoke.attack }
                />
                <label htmlFor='attack'>
                  { `Attack ${currentPoke.attack}` }
                </label>
              </div>
              <div>
                <input
                  onChange={ handleClick }
                  type='radio'
                  name='stats'
                  id='defense' 
                  value={ currentPoke.defense }
                />
                <label htmlFor='attack'>
                  { `Attack ${currentPoke.defense}` }
                </label>
              </div>
              <div>
                <input
                    onChange={ handleClick }
                    type='radio'
                    name='stats'
                    id='sp_attack' 
                    value={ currentPoke.sp_attack }
                  />
                <label htmlFor='attack'>
                  { `Attack ${currentPoke.sp_attack}` }
                </label>
              </div> 
              <div>
                <input
                      onChange={ handleClick }
                      type='radio'
                      name='stats'
                      id='sp_defense' 
                      value={ currentPoke.sp_defense }
                    />
                <label htmlFor='attack'>
                  { `Attack ${currentPoke.sp_defense}` }
                </label>
              </div> 
              <div>
                <input
                        onChange={ handleClick }
                        type='radio'
                        name='stats'
                        id='speed' 
                        value={ currentPoke.speed }
                    />
                <label htmlFor='attack'>
                  { `Attack ${currentPoke.speed}` }
                </label>
              </div>
            </div>
          )
        }
    </>
  )
}

export default BattlePage