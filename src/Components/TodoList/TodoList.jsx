import React  from 'react';
import {
    TodoContainer, List, TodoItem,
    TodoText, TodoBtn, FormInput
} from './TodoList.module';

export class TodoList extends React.Component {
    state = {
        visible: false,
    };

    toggle = () => {
        this.setState(prevState => ({
            visible: !prevState.visible,
        }));
    };

    render() {
        return (
            <TodoContainer>
                <List>
                    {this.props.todos.map(({id, text, competed },  index) =>
                        <TodoItem
                            key={id}
                        >
                            <FormInput
                                type='checkbox'
                                checked={competed}
                                onChange={()=>this.props.onToggleCompleted(id)}
                            />
                            <TodoText> {text} </TodoText>
                            <TodoBtn
                                type='button'
                                onClick={()=> this.props.deleteTodo(id)}
                            > 
                            delete
                            </TodoBtn>
                        </TodoItem>
                    )}
                </List>
            </TodoContainer>
        );
    }
}