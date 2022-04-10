import React, { useEffect, useState } from 'react'
import BattlingPokemon from '../../components/BattlingPokemon/BattlingPokemon';
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
        <BattlingPokemon currentPoke={ currentPoke } handleClick={ handleClick } />
    </>
  )
}

export default BattlePage