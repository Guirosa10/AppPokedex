export const fetchKantoDex = async () => {
    const  results = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=10')
        .then((res) => res.json());
    return results;    
}

export const fetchByIndex = async (id) => {
  const array = [];
  for(let index = id; index <= id+19; index++){
    const results = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
    .then((res) => res.json());
    array.push(results)
  }
  
    return array;
}