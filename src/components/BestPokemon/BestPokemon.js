import React, { Component } from 'react';

class BestPokemon extends Component {
    state = {
        pokemonNames: [],
        isLoading: true
    }
        componentDidMount() {
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
    return (
        <div>    
        {this.state.isLoading ? <span>Loading ....</span> :
    <>
        <h3>Pokemon Abilities</h3>
        <ul>
            {this.props.abilities.map((Abilitie, index) => {
                return (<li key={index}>{Abilitie}</li>)
        })}
        </ul>
    </>
    }
    </div>
    )
}
}


export default BestPokemon;