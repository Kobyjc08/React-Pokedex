import React from 'react';
import PokemonCatcher from "./PokemonCatcher"

function CaughtPokemon(){
    const date = new Date().toLocaleDateString();
    return (
    <div>
        <div> <PokemonCatcher/></div>
        {date}
    </div>
    ) 
}
export default CaughtPokemon;