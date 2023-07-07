import React, { Component } from 'react';
  import { ToastContainer, toast } from 'react-toastify';
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
import tabs from './assets/tabsContent.json'
import { Tabs } from './Components/Tabs/Tabs';
import {Pokemon} from './Components/Pokemon/Pokemon';
import { PokemonForm } from './Components/PokemonForm/PokemonForm';

export class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Task 1', competed: false },
      { id: 'id-2', text: 'Task 2', competed: false },
      { id: 'id-3', text: 'Task 3', competed: false },
    ],
    pokemonName: "",
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

  //забрать зафетчить засетить начальний стейт данних
  componentDidMount( ) {
    const todos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todos);
    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    };
  };

  // можем записать чтото новое в локал сторедж, 
  // послать новій запрос
  componentDidUpdate(prevProps, prevState) {
    if (this.state.todos !== prevState.todos ) {// проверять на обнову
      localStorage.setItem('todos', JSON.stringify(this.state.todos))
    }
  }

  handlePolemonItem = pokemonName => {
   
    this.setState({ pokemonName });
  }

  render() {
    const { todos } = this.state; 
    const notify = () => toast("Wow so easy !");
    return (
      <React.Fragment>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <ThemeProvider theme={theme}>
          <Header />
          <PageSection>
 
            <PageContainer>
              
              <PokemonForm onSubmit={ this.handlePolemonItem} />
              
            </PageContainer>
          </PageSection>
          <PageSection>
            <PageContainer>
              <Tabs tabs={tabs } />
            </PageContainer>
          </PageSection>
          <PageSection>
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