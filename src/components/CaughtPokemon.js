import React, { Component } from 'react';

class CaughtPokemon extends Component {
state = {
    CaughtPokemon: 0
}

componentDidMount() {
    console.log('componentDidMount')
}
componentDidUpdate(){
    console.log('componentDidUpdate')
}
componentWillUnmount (){
    console.log('componentWillUnmount')
}

catchPokemon = () => {
this.setState ((previousState) => { 
    return {
        CaughtPokemon: previousState.CaughtPokemon + 1
    }
})
}

render (){
    return (
    <div>
    <p>Caught {this.state.CaughtPokemon} Pokemon on</p>{this.props.date}
    <button onClick={this.catchPokemon}>Catch Pokemon</button>
    </div>
    )
}}

export default CaughtPokemon;