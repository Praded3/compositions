import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Header } from './Components/Header/Header/Header';
import {PageSection} from './Components/Section/Section'
import { PageContainer } from './Components/Container/Container'
import { ThemeProvider } from '@emotion/react'
import { theme } from './Components/Constants/index';
import {Feedback } from './Components/Feedback/Feedback'
import { Dropdown } from './Components/Dropdown/Dropdowm'
import { TodoList } from './Components/TodoList/TodoList'
import { TestForm } from './Components/TestForm/TestFoms';
import { TodoEditor } from './Components/TodoEditor/TodoEditor';
import { PhoneBook } from './Components/PhoneBook/PhoneBook/PhoneBook';
import { LoginForm } from './Components/LoginForm/LoginForm';
import { Modal } from './Components/Modal/Modal';

export class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Task 1', competed: false },
      { id: 'id-2', text: 'Task 2', competed: false },
      { id: 'id-3', text: 'Task 3', competed: false },
    ],
    showModal: false
  };

  toogleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  deleteTodo = (todoId) => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };
  testFormSubmit = data => {
    console.log(data);
    
  }
  onToggleCompleted = (todoId) => {
    console.log('todoId', todoId)
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            competed: !todo.competed,
          };
        }
        return todo;
      }),
    }));
  };
  addTodo = text => {
    console.log(text);
    const todo = {
      id: nanoid(),
      text,
      competed: false,
    };
    
    this.setState(prevState => ({
      todos: [todo, ...prevState.todos],
    }));
  };

  render() {
    const { todos } = this.state; 
    
    return (
      <React.Fragment>
        <ThemeProvider theme={theme}>
          <Header toogleModal={ this.toogleModal} />
          {this.state.showModal && <Modal/>}
          <PageSection>
            <PageContainer>
              <LoginForm />
            </PageContainer>
            <PageContainer>
              <PhoneBook
              onSubmit={ this.testFormSubmit }
              />
            </PageContainer>
          </PageSection>
          {/* Feedback */}
          <PageSection>
            <PageContainer>
              <TodoEditor onSubmit={this.addTodo} />
              <TestForm onSubmit={ this.testFormSubmit } />
              <TodoList
                todos={todos}
                deleteTodo={this.deleteTodo}
                onToggleCompleted={this.onToggleCompleted}
              />
            </PageContainer>
          </PageSection>
          <PageSection>
            <PageContainer>
              <Feedback initialValue={10} />
            </PageContainer>
          </PageSection>
          {/* Dropdown */}
          <PageSection>
            <PageContainer>
              <Dropdown/>
            </PageContainer>
          </PageSection>
        </ThemeProvider>
      </React.Fragment>
    );
  }
};