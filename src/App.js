import React from 'react';
import BestPokemonSelector from './components/BestPokemon/BestPokemonSelector';
import Logo from './components/Logo';
import CaughtPokemon from './components/CaughtPokemon/CaughtPokemon';
import './App.css';


function App() {
    const today = new Date().toLocaleDateString()
    return <div>
        <Logo appName="Jorge's Pokedex"/>
        <BestPokemonSelector/>
        <CaughtPokemon date={today}/>
        </div>
}

export default App;

