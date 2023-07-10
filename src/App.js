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
import {Pokemon} from './Components/PokemonComponent/Pokemon/Pokemon';
import { PokemonForm } from './Components/PokemonComponent/PokemonForm/PokemonForm';
import { MaterialsForm } from './Components/MaterialsComponent/MaterialsForm/MaterialsForm';
import * as API from './Components/MaterialsComponent/MateialsApi/MaterialsApi'
import {MaterialsContainer} from './Components/MaterialsComponent/MaterialsContainer/MaterialsContainer'

export class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Task 1', competed: false },
      { id: 'id-2', text: 'Task 2', competed: false },
      { id: 'id-3', text: 'Task 3', competed: false },
    ],
    pokemonName: "",
    materials: [],
    isLoading: false,
    error: false
  };

  addMaterial = async values => {
    try {
      this.setState({isLoading: true})
      const material = await API.addMaterial(values);
      this.setState(state => ({
        materials: [material, ...state.materials],
        isLoading: false,
    }));
    } catch (error) {
      this.setState({ error: true})
      console.log(error);
    }
  };

  deleteMaterial = async id => {
    try {
      await API.deleteMaterial(id);
      this.setState(state => ({
      materials: state.materials.filter(material =>
        material.id !== id),
    }));
    } catch (error) {
      this.setState({ error: true });
      console.log('error', error);
    }
  };

  updateMaterial = async fields => {
    try {
      const updateMaterial = await API.updateMaterial(fields);
        this.setState(state => ({
        materials: state.materials.map(material =>
        material.id === fields.id ? updateMaterial : material
      ),
    }));
    } catch (error) {
      this.setState({ error: true });
      console.log('error', error.code);
    }
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
  async componentDidMount( ) {
    // const todos = localStorage.getItem('todos');
    // const parsedTodos = JSON.parse(todos);
    // if (parsedTodos) {
    //   this.setState({ todos: parsedTodos });
    // };

    try {
      this.setState({ isLoading: true });
      const materials = await API.getAllMaterials();
      this.setState({ materials, isLoading: false });
    } catch (error) {
      console.log('error', error)
    }
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
    const { todos, materials, isLoading, error } = this.state; 
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
 
            <PageContainer >
              {error && <p>sorry it is some error</p>}
              
              
              <MaterialsForm
                onSubmit={this.addMaterial}
              />
              
              {isLoading ?
                <p>Loading</p> :
                <MaterialsContainer
                  items={materials}
                  deleteMaterial={this.deleteMaterial}
                  updateMaterial={this.updateMaterial}
                />}
              {/* <PokemonForm onSubmit={ this.handlePolemonItem} /> */}
              
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