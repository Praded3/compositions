import React, {Component} from 'react';
import { Field, Formik, Form, ErrorMessage   } from 'formik';
import {   Btn, Label } from './LoginForm.styled';
import styled from 'styled-components';
import { object, string, number, date, InferType } from 'yup';

const userSchema = object({
    login: string().required(),
    email: string().email().required(),
    password: string().min(6, 'Too short').required(),
});
    
const Input = styled(Field)`
    display: flex;
    color: green;
    border: 2px solid red;
    font-size: 16px;
    font-weight: 500;
` 
const LogForm = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-flex-group: grey;
    border: 2px solid red;
    font-size: 16px;
    font-weight: 500;
    padding-top: auto;
    height: 100%;
    gap:16px;
    
` 
const ErrorText = styled.p`
    display: flex;
    color: red;
    font-size: 18px;
    font-weight: 500;
` 


const FormError = ({ name }) => {
    return (
        <ErrorMessage
            name={name}
            render={message => <ErrorText>{message}</ErrorText>}
        />
    );
};

const USER_KEY = 'user';

export class LoginForm extends Component {

    state = {
        initialValues: {
            login: '',
            email:'',
            password: '',
        }
    };

    componentDidMount() {
        const savedUser = localStorage.getItem(USER_KEY);
        if (USER_KEY) {
            this.setState(state => ({
                initialValues: JSON.parse(savedUser),
            }));
        };
    };

    componentDidUpdate(_, prevState) {
        if (prevState.initialValues.login !== this.state.initialValues.login) {
            localStorage.setItem(USER_KEY, JSON.stringify(this.state.initialValues));
        };
    }

    handleSubmit  = (values, {resetForm}) => {
        this.setState(state => ({
            initialValues: values,
            
        }));
        resetForm();
    }

    render() {

        return (
        
            <Formik
                initialValues={this.state.initialValues}
                validationSchema={userSchema}
                onSubmit={this.handleSubmit}
            >
                <LogForm>
                    <Label> User Name
                        <Input
                            name='login'
                            type='text'
                        />
                        <FormError component="div" name='login' />
                    </Label>
                    <Label> E-mail
                        <Input
                            name='email'
                            type='email'
                        />
                        <FormError component="div" name='email' />
                    </Label>
                    <Label> Password
                        <Input
                            name='password'
                            type='password'
                        />
                        <FormError component="div" name='password' />
                    </Label>
                    <Btn 
                        type='submit'
                    >
                        Login
                    </Btn >
                </LogForm>
            </Formik>
        );
    }
}
