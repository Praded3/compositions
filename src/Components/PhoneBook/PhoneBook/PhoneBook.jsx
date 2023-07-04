import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, FormInput, FormBtn, Title } from './PhoneBook.styled';


export class PhoneBook extends Component{
    

    state = {
        message:'',
    };

    // handleChange = e => {
    //     this.setState({ message: e.currentTarget.value });
    // };

    handleSubmit = e => {
        e.preventDefault();
        console.log('e', e)
        this.props.onSubmit(this.state.message);
        this.setState({ message: '' });
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Title>Phonebook</Title>
                <FormInput
                    
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                <FormBtn
                    type='submit'>
                    add task
                </FormBtn>
            </Form>
        );
    };
}