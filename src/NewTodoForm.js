import React, { Component } from 'react'
import './NewTodoForm.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


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

        if (this.state.desc !== '') {
            this.props.criarTodo(this.state)
        }

        this.setState({
            desc: ''
        })
    }

    handleKeyDown(event) {
        if(event.keyCode === 13) { 
            event.preventDefault()

            if (this.state.desc !== '') {
                this.props.criarTodo(this.state)
            }

            this.setState({
                desc: ''
            })
      }
    }

    render() {
        return (
        <div>
            <form autocomplete="off" onSubmit={this.onSubmitHandler}>
                <input onChange={this.onChangeHandler} name='desc' id='desc' value={this.state.desc}/>
                <button><FontAwesomeIcon onKeyDown={this.handleKeyDown} onClick={this.props.removeTodo} icon={faPlus} /></button>
            </form>
        </div>
        )
  }
}
