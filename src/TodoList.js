import React, { Component } from 'react'
import NewTodoForm from './NewTodoForm'
import Todo from './Todo'
import uuid from 'uuid/v4'
import './TodoList.css'

export default class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: []
        }

        this.listarTodos = this.listarTodos.bind(this)
        this.criarTodo = this.criarTodo.bind(this)
        this.editaTodo = this.editaTodo.bind(this)
    }

    listarTodos() {
        return (
            this.state.todos.map(todo => <Todo key={todo.id} id={todo.id} desc={todo.desc} editaTodo={this.editaTodo} removeTodo={() => this.removeTodo(todo.id)}/>)
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

    editaTodo(id, updatedTask) {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id){
                return { ...todo, desc: updatedTask }
            }
            return todo
        }
    )
        this.setState({ todos: updatedTodos })
    }

    render() {
        return (
        <div className='todoItens'>
            <NewTodoForm criarTodo={this.criarTodo}/>
            <br/>
            <div className='todoItem'>
                {this.listarTodos()}
            </div>
        </div>
        )
  }
}
