import React, { Component } from 'react';
import{Form, Input, Btn} from './PokemonForm.styled'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
export class PokemonForm extends Component {

    state = {
        pokemonName: '',
    };

    handelNameChange = e => {
        this.setState({ pokemonName: e.currentTarget.value.toLowerCase() });        
    }

    handeleSubmit = e => {
        e.preventDefault();

        if (this.state.pokemonName.trim() === "") {
            toast.error('Error!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }
        
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
