import React, { useState, useEffect } from 'react';
import BestPokemon from './BestPokemon'

function BestPokemonFetcher (props) {
    let [bestPokemon, setbestPokemon] = useState(null);

    useEffect (() => {
    setbestPokemon(null)
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokemonId}/`)
    .then(res => res.json())
    .then(data => setbestPokemon(data))
}, [props.pokemonId]);

if (!bestPokemon) {
return <div>Loading...</div>
} else {
    const abilities = bestPokemon.abilities.map(item => {
        return item.ability.name
    })
    return <BestPokemon abilities={abilities}
    />
     
}}

export default BestPokemonFetcher;