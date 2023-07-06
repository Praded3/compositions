import React from 'react';
import { Field, Formik, Form, ErrorMessage   } from 'formik';
import {   Btn, Label } from './LoginForm.styled';
import styled from 'styled-components';
import { object, string, number, date, InferType } from 'yup';

const userSchema = object({
    login: string().required(),
    email: string().email().required(),
    password: string().min(6, 'Too short').required(),
});

const initialValues = {
    login: '',
    email:'',
    password: '',
};
    
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


export const LoginForm = () => {

    const handleSubmit = (values, {resetForm}) => {
        resetForm();

        const user = localStorage.getItem("user");
        console.log('user', user)
        if (user) {
            const parsedUser = JSON.parse(user);
            const strUser = parsedUser.login.toString();
           
            const strValuesLogin = values.login.toString();
            console.log('values', values);
            
            if (strUser.length !== strValuesLogin.length) {
                console.log('no')
                localStorage.setItem("user", JSON.stringify(values));
            }
        } else {
            localStorage.setItem("user", JSON.stringify(values));
        }
        


      
        
        

    };
    return (
        
        <Formik initialValues={initialValues} validationSchema={userSchema} onSubmit={handleSubmit}>
            <LogForm>
                <Label> User Name
                    <Input  
                        name='login' 
                        type='text'
                    />
                    <FormError component="div" name='login'/>
                </Label>
                <Label> E-mail
                    <Input  
                        name='email' 
                        type='email'
                    />
                    <FormError component="div" name='email'/>
                </Label>
                <Label> Password
                    <Input  
                        name='password' 
                        type='password'
                    />
                    <FormError component="div" name='password'/>
                </Label>
                <Btn
                    type='submit'
                >
                    Login
                </Btn>
            </LogForm>
        </Formik>
    )
    
    
}
