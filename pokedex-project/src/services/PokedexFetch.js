export const fetchKantoDex = async () => {
    const  { results } = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=50')
        .then((res) => res.json());
    return results;    
}