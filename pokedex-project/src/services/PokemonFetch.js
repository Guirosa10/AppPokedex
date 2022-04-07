export const fetchPokemonImage = async (pokemonName) => {
    const results = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((res) => res.json());
    return results;
};

export const fetchBySpecies = async (param) => {
  const { evolution_chain } = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${param}`).then((res) => res.json());
  return evolution_chain.url;
};