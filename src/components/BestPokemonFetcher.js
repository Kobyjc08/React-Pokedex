import React, { Component, useState, useEffect } from 'react';

function BestPokemonFetcher (props) {
useEffect (() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokemonId}/`)
    .then(res => res.json())
    .then(data => setbestPokemon(data))
}, []);
let [bestPokemon, setbestPokemon] = useState(null);
return (!bestPokemon ?  (null) :
    (<BestPokemon pokemon={bestPokemon} Abilities={props.Abilities}/>))
}

class BestPokemon extends Component {
    state = {
        pokemonNames: [],
        isLoading: true
    }
        componentDidMount() {
        console.log(this.props)
        fetch('https://pokeapi.co/api/v2/pokedex/1/')
        .then(res => res.json())
        .then(data => {
            const names =[data.pokemon_entries[0].pokemon_species.name, data.pokemon_entries[1].pokemon_species.name, data.pokemon_entries[2].pokemon_species.name, data.pokemon_entries[3].pokemon_species.name, data.pokemon_entries[4].pokemon_species.name, data.pokemon_entries[5].pokemon_species.name, data.pokemon_entries[6].pokemon_species.name];
            this.setState({
                pokemonNames: names,
                isLoading: false
            })
        });
    }
render (){
    if (this.state.isLoading) {
        return <span>Loading ....</span>
    } else {
    return (
    <div>
        <p>My favorite Pokemon is Pikachu</p>
        {this.state.isLoading ? <span>Loading...</span> :
        <>
        <h3>Pokemon names</h3>
        <ul>
            {this.state.pokemonNames.map((name, index) => {
                return (<li key={index}>{name}</li>)
        })}
        </ul>
        <h3>Pokemon Abilities</h3>
    
        <ul>
            {this.props.Abilities.map((Abilitie, index) => {
                return (<li key={index}>{Abilitie}</li>)
        })}
        </ul>
    </>
    }
    </div>
    )}
}}


function BestPokemonSelector(props) {
  const [pokemonId, setPokemonId] = useState(null);

  function handleBulbasaurClick() {
    setPokemonId(1);
  }
  function handleCharmanderClick() {
    setPokemonId(4);
  }

  return (
    <div>
      <button onClick={handleBulbasaurClick}>Fetch Bulbasaur</button>
      <button onClick={handleCharmanderClick}>Fetch Charmander</button>
      {pokemonId ? <BestPokemonFetcher pokemonId={pokemonId} Abilities={props.Abilities}/> : null}
    </div>
  );
}

export default BestPokemonSelector;