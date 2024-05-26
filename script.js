// Function to fetch and process Pokemon data
async function fetchPokemonData() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon');
    const data = await response.json();

    const pokemonList = data.results.map(pokemon => {
        const name = pokemon.name;
        const url = pokemon.url;

        // Extract ID from the URL
        const pokemonId = url.split('/').filter(part => part).pop();

        // Create image URL
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;

        return {
            name: name,
            url: url,
            image: imageUrl
        };
    });

    displayPokemon(pokemonList);
}

// Function to display Pokemon data
function displayPokemon(pokemonList) {
    const container = document.getElementById('pokemon-container');

    pokemonList.forEach(pokemon => {
        const pokemonCard = document.createElement('div');
        pokemonCard.classList.add('pokemon-card');

        pokemonCard.innerHTML = `
            <img src="${pokemon.image}" alt="${pokemon.name}">
            <h3>${pokemon.name}</h3>
            <a href="${pokemon.url}" target="_blank">More Info</a>
        `;

        container.appendChild(pokemonCard);
    });
}

// Call the function
fetchPokemonData();

