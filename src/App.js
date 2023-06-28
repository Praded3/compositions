import React, { Component }  from 'react';
import { Header } from './Components/Header/Header/Header';
import {PageSection} from './Components/Section/Section'
import { PageContainer } from './Components/Container/Container'
import { ThemeProvider } from '@emotion/react'
import { theme } from './Components/Constants/index';
import {Feedback } from './Components/Feedback/Feedback'
import { Dropdown } from './Components/Dropdown/Dropdowm'
import { TodoList } from './Components/TodoList/TodoList'

export class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Task 1', competed: false },
      { id: 'id-2', text: 'Task 2', competed: false },
      { id: 'id-3', text: 'Task 3', competed: false },
    ],
  };

  deleteTodo = (todoId) => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state; 
    
    return (
      <React.Fragment>
        <ThemeProvider theme={theme}>
          <Header />
          {/* Feedback */}
          <PageSection>
            <PageContainer>
              <TodoList todos={todos} deleteTodo={this.deleteTodo } />
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
 