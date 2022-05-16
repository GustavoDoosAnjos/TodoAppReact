import React, { Component } from 'react'
import NewTodoForm from './NewTodoForm'
import Todo from './Todo'
import uuid from 'uuid/v4'

export default class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: []
        }

        this.listarTodos = this.listarTodos.bind(this)
        this.criarTodo = this.criarTodo.bind(this)
    }

    listarTodos() {
        return (
            this.state.todos.map(todo => <Todo key={todo.id} id={todo.id} desc={todo.desc} removeTodo={() => this.removeTodo(todo.id)}/>)
        )
    }

    criarTodo(todo) {
        let todoIdentificado = {...todo, id: uuid()}
        this.setState(state => ({
            todos: [...state.todos, todoIdentificado]
        }))
    }

    removeTodo(id) {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }

    render() {
        return (
        <div>
            <NewTodoForm criarTodo={this.criarTodo}/>
            <br/>
            {this.listarTodos()}
        </div>
        )
  }
}
