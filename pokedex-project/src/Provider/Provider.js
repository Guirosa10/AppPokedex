import MyContext  from "../Context/MyContext";
import React, { useState } from 'react';

export default function Provider({children}) {
  const [pokemons, setPokemons] = useState([]);
    const value = { pokemons, setPokemons }
    return (
        <main>
          <MyContext.Provider value={ value }>
            {children}
          </MyContext.Provider>
        </main>
      );
}