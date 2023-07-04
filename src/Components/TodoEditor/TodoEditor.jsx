import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, FormTextarea, FormBtn } from './TodoEditor.styled';


export class TodoEditor extends Component{
    

    state = {
        message:'',
    };

    handleChange = e => {
        this.setState({ message: e.currentTarget.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.message);
        this.setState({ message: '' });
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormTextarea
                    value={this.state.message}
                    onChange={this.handleChange}
                />
                <FormBtn type='submit'>
                    add task
                </FormBtn>
            </Form>
        );
    };
}