import React, { useState } from 'react';

const PokemonCatcher = () => {
    const [caughtPokemon, setCaughtPokemon] = useState([]);
    const [pokemonFromInput, setPokemonFromInput] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleInputChange = (event) => {
        setPokemonFromInput(event.target.value)
    }

    const catchPokemon = () => {
        if (pokemonFromInput !== "") {
            setErrorMessage("")
            setCaughtPokemon(caughtPokemon.concat(pokemonFromInput))
        } else {
            setErrorMessage("Please enter a pokemon :D")
        }
    };

    const reset = () => {
        setCaughtPokemon([])
    };

    return (
        <div id="pokemon-catcher">
            <h3>Caught {caughtPokemon.length} Pokemons</h3>

            {caughtPokemon.map((pokemon, index) => {
                return (<p key={index}>{pokemon}</p>)
            })}

            <input type="text" value={pokemonFromInput} onChange={handleInputChange} />

            {errorMessage ? <p>{errorMessage}</p> : null}

            <button onClick={catchPokemon}>Catch</button>
            {caughtPokemon.length > 0 ? <>
            <button onClick={reset}>Reset</button>
            </> : null}


        </div>
    );
}

export default PokemonCatcher;