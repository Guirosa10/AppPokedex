export const fetchPokemonImage = async (pokemonName) => {
    const results = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((res) => res.json());
    return results;
};

// sprites.other['official-artwork'].front_default;