import React from 'react';
import BestPokemonSelector from './components/BestPokemonFetcher';
import Logo from './components/Logo';
import CaughtPokemon from './components/CaughtPokemon';
import './App.css';


function App() {
    const Abilities = ['Anticipation', 'Adaptability', 'Run-Away']
    return <div>
        <Logo appName='Pokedex'/>
        <BestPokemonSelector Abilities={Abilities}/>
        <CaughtPokemon date={new Date().toLocaleDateString()}/>
        </div>
}

export default App;

