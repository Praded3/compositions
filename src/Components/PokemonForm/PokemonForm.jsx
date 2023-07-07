import React, { Component } from 'react';
import{Form, Input, Btn} from './PokemonForm.styled'

export class PokemonForm extends Component {

    state = {
        pokemonName: '',
    };

    handelNameChange = e => {
        this.setState({ pokemonName: e.currentTarget.value.toLowerCase() });        
    }

    handeleSubmit = e => {
        e.preventDefault();

        this.props.onSubmit(this.state.pokemonName);

        this.setState({ pokemonName: ''})
    }

    render() {
        return (
            <Form onSubmit={this.handeleSubmit}>
                <Input
                    type='text'
                    name='pokemonName'
                    value={this.state.pokemonName}
                    onChange={this.handelNameChange}
                />
                <Btn type='submit'>search</Btn>
 
            </Form>
        )
    };
}
