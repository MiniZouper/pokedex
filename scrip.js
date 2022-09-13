
//variable para guardar el numero de pokemons que se quieren mostrar
const pokemonContainer = document.querySelector(".pokemon-container");

//funcion para mostrar los pokemons de la API
function fetchPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => res.json())
    .then(data => {
        createPokemon(data);
    });
}

//funcion para mostrar los pokemons de forma aleatoria
function pokemonsAle (){
    let ale = Math.floor(Math.random() * 150) + 1;
    fetchPokemon(ale);
}

//funcion para mostrar los pokemons de forma aleatoria cada vez que se recarga la pagina
function fetchPokemons(number) {
    for (let i = 1; i <= number; i++) {
        pokemonsAle(i);
    }
}

//funcion para mostrar los pokemons, numero e imagen en el HTML
function createPokemon(pokemon){
    const card = document.createElement("div");
    card.classList.add("pokemon-block");

    const spriteContainer = document.createElement("div");
    spriteContainer.classList.add("img-container");

    const sprite = document.createElement("img");
    sprite.src = pokemon.sprites.front_default;

    spriteContainer.appendChild(sprite);

    const number = document.createElement("p");
    number.textContent= `#${pokemon.id.toString().padStart(3, "0")}`;

    const name = document.createElement("p");
    name.classList.add("name");
    name.textContent = pokemon.name;

    card.appendChild(spriteContainer);
    card.appendChild(number);
    card.appendChild(name);

    pokemonContainer.appendChild(card);
}

//solo mostrara 6 pokemones
fetchPokemons(6);
