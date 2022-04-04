import React from 'react'
import Header from '../../components/Header/Header'
import PokémonCard from '../../components/PokémonCard/PokémonCard'
import SearchBar from '../../components/SearchBar/SearchBar'

export default function SearchPage() {
  return (
    <>
        <Header/>
        <SearchBar />
        <div className="pokedex-container">
          <PokémonCard />
        </div>
    </>
  )
};
