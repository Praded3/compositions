import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, FormInput, Label, FormBtn } from './TestForm.styled';
import { nanoid } from 'nanoid';

export class TestForm extends Component{
    

    state = {
        name: '',
        soname: '',
        position: 'first',
        agreed: false,
    };
    
    loginInputId = nanoid();

    handleInputChage = event => {
        this.setState({
            [event.currentTarget.name]: event.currentTarget.value,
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    };
    //clean state

    reset = () => {
        this.setState({ name: '', soname: '' });
    };

    handleAgreeCheck = event => {
        this.setState({
            agreed: event.currentTarget.checked
        })
    }


    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Label htmlFor={this.loginInputId}>
                    Name
                        <FormInput
                        id={this.loginInputId}
                        name='name'
                        type='text'
                        value={this.state.name}
                        onChange={this.handleInputChage}
                        />
                </Label>
                <Label htmlFor={this.loginInputId}>
                    Soname
                        <FormInput
                        id={this.loginInputId}
                        name='soname'
                        type='text'
                        value={this.state.soname}
                        onChange={this.handleInputChage}
                        />
                </Label>
                {/* radio */}
                <Label>first
                    <FormInput
                        name='position'
                        type='radio'
                        value="first"
                        onChange={this.handleInputChage}
                        checked={this.state.position ==='first'}
                    />
                </Label> 
                <Label>second 
                    <FormInput
                        name='position'
                        type='radio'
                        value="second"
                        onChange={this.handleInputChage}
                        checked={this.state.position ==='second'}
                    />    
                </Label>
                <Label>third 
                    <FormInput
                        name='position'
                        type='radio'
                        value="third"
                        onChange={this.handleInputChage}
                        checked={this.state.position ==='third'}
                    />
                </Label>
                <Label> Agree to terms 
                    <FormInput
                        name='agreed'
                        type='checkbox'
                        value="agreed"
                        onChange={this.handleAgreeCheck}
                        checked={this.state.agreed}
                    />
                </Label>
                <FormBtn type='submit' disabled={!this.state.agreed}>
                    Send
                </FormBtn>
            </Form>
        );
    };
}