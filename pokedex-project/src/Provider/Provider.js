import MyContext  from "../Context/MyContext";
import React from 'react';

export default function Provider({children}) {
    const value = {}
    return (
        <main>
          <MyContext.Provider value={ value }>
            {children}
          </MyContext.Provider>
        </main>
      );
}