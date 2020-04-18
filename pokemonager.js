(() => {
  class Pokemonager {
    // This should return an array of all the names of n Pokemon from the Pokemon API.
    findNames(n) {
        const url =`https://pokeapi.co/api/v2/pokemon?limit=${n}`;    
        return fetch(url)
          .then((response) => response.json())
          .then((pokemon) => {
            return pokemon.results.map(poke => poke.name)
          
        })
          .catch((err) => {
            console.error("Try again!", err);
          }); 
    }      
    // This should return an array of all the Pokemon that are under a particular weight.
  findUnderWeight(weight) {
      const num = 10;
      const url = `https://pokeapi.co/api/v2/pokemon?limit=${num}`;
      return fetch(url)
        .then((response) => response.json())
        .then(poke => {
          return Promise.all(
            poke.results.map(pokeDex => fetch(pokeDex["url"]))
          )
        })
        .then((stuff) => {
          return Promise.all(
            stuff.map(moreStuff => moreStuff.json())
          )
        })
        .then((lastArray) => {
          return lastArray.filter((pokemons) => pokemons.weight < weight)
        })
        .catch((err) => {
          console.error("Try again!", err);
        });
    }
  }

  window.Pokemonager = Pokemonager;
})();


//module.exports = Pokemonager;