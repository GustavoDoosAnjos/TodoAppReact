import React, { Component } from 'react'

export default class NewTodoForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            desc: ''
        }

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this)
    }
    onChangeHandler(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    onSubmitHandler(e) {
        e.preventDefault()

        this.props.criarTodo(this.state)
        this.setState({
            desc: ''
        })
    }

    render() {
        return (
        <div>
            <form onSubmit={this.onSubmitHandler}>
                <input onChange={this.onChangeHandler} name='desc' id='desc'/>
                <button>Registrar</button>
            </form>
        </div>
        )
  }
}
