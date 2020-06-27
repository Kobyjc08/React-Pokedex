import React, { Component } from 'react';

class Logo extends Component {
    logWhenClicked = () => {
        console.log('Hey mate')
    }
    render (){
        return <header>
        <h1>Welcome to the {this.props.appName}</h1>
        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt='pokemon' onClick={this.logWhenClicked}></img>
        </header>

    }
}

export default Logo;