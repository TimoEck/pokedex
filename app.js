const pokeContainer = document.querySelector("#poke_container")
const pokeAddBtn = document.querySelector("#pokeAdd")
const pokeCard = document.querySelectorAll(".card")
const pokemons_number = 151;
const colors = {
	normal: '#A8A77A',
	fire: '#EE8130',
	water: '#6390F0',
	electric: '#F7D02C',
	grass: '#7AC74C',
	ice: '#96D9D6',
	fighting: '#C22E28',
	poison: '#A33EA1',
	ground: '#E2BF65',
	flying: '#A98FF3',
	psychic: '#F95587',
	bug: '#A6B91A',
	rock: '#B6A136',
	ghost: '#735797',
	dragon: '#6F35FC',
	dark: '#705746',
	steel: '#B7B7CE',
	fairy: '#D685AD',
};

const main_types = Object.keys(colors);





const fetchPokemon = async () => {
    for (let i = 1; i < pokemons_number; i++) {
        await getPokemon(i);
        
    }
}

const getPokemon = async id => {
    
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`; 

    const res = await fetch(url);
    const pokemon = await res.json();
    createPokemonCard(pokemon);
}

function createPokemonCard(pokemon) {
    const pokemonEL = document.createElement("div");
    pokemonEL.classList.add("pokemon", "text-dark");

    const height = pokemon.height / 10 + " m";
    const weight = pokemon.weight / 10 + " kg";
    const id = pokemon.id;
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const poke_types = pokemon.types.map(el => el.type.name);
    const type = main_types.find(type => poke_types.indexOf(type) > -1);
    const hp = `${pokemon.stats[0].base_stat}`
    const attack = `${pokemon.stats[1].base_stat}`
    const defense = `${pokemon.stats[2].base_stat}`
    const special_attack = `${pokemon.stats[3].base_stat}`
    const special_defense = `${pokemon.stats[4].base_stat}`
    const speed = `${pokemon.stats[5].base_stat}`


    const pokeInnerHTML = `


    <div class="card-container">
    <div class="card bg-dark m-4" id="${type}">

      <!-- FRONT -->
      <figure class="front">
          <div class="main-content">
            <h5 class="d-flex text-light justify-content-start ms-2 mt-2">#${id}</h5> 
            <div class="img p-0 mx-auto">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png" alt="sans" class="mt-2"  id="pokeImg">
            </div>
            <div class="card-body text-light">
                <div class="row">
                    <div class="col-12 d-flex flex-column">
                        <h3 class="card-header d-flex justify-content-center  p-0" id="pokeName">${name}</h5>
                        <div class="hp d-flex justify-content-center align-content-center">
                            <div class="hpBox bg-danger rounded w-75">
                              <div class="line rounded" style="width: calc(${hp}%/3); height: 5px; border: 1px solid #15ff00; background-color: #15ff00;"></div>
                            </div>
                        </div>
                        <h6 class=" d-flex justify-content-center mt-1">${hp} hp</h6>  <!-- Add HP Import in app.js -->
                        <div class="d-flex justify-content-evenly align-items-center flex-row mt-2 mb-1">
                            <div class="type">
                                <h6 id="typeField" class="d-flex justify-content-center mb-0">${type}</h5>
                              <h6 class="d-flex justify-content-center mt-2 bg-light rounded text-dark p-1"> Type </h6>
                            </div>
                            <div class="vr"></div>
                            <div class="weight">
                              <h6 id="weightField" class="d-flex justify-content-center mb-0">${weight}</h5>
                              <h6 class="d-flex justify-content-center mt-2 bg-light rounded text-dark p-1"> Weight </h6> <!-- Add Weight Import in app.js -->
                            </div>
                            <div class="vr"></div>
                            <div class="height">
                                <h6 id="heightField" class="d-flex justify-content-center mb-0">${height}</h6>
                              <h6 class="d-flex justify-content-center mt-2 bg-light rounded text-dark p-1"> Height </h6> <!-- Add Height Import in app.js -->
                          </div>
                      </div>
                    </div>
              </div>
          </div>
        </div>
      </figure>

      <!-- BACK -->
      <figure class="back bg-dark text-light">
        <div class="stats mt-4 ">
            <h3>Stats</h3>
            <div class="card__stats container d-flex justify-content-center">
                <table>
                    <tbody>
                    <tr>
                    <th>HP</th>
                    <td>${hp}</td>
                    </tr>
                    <tr>
                    <th>Attack</th>
                    <td>${attack}</td>
                    </tr>
                    
                    <tr>
                    <th>Defense</th>
                    <td>${defense}</td>
                    </tr>
            
                    <tr>
                    <th>Special Attack</th>
                    <td>${special_attack}</td>
                    </tr>
                    
                    <tr>
                    <th>Special Defense</th>
                    <td>${special_defense}</td>
                    </tr>
                    <tr>
                    <th>Speed</th>  
                    <td>${speed}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </figure>
    </div>
  </div>
</div>


    `;

    pokemonEL.innerHTML = pokeInnerHTML;

    pokeContainer.appendChild(pokemonEL);
}

fetchPokemon();
console.log('Hi! :)')







