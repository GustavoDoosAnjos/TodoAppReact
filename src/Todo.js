import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faPencil } from '@fortawesome/free-solid-svg-icons'
import './Todo.css'

export default class Todo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isEditing: false,
      task: this.props.desc,
      isDone: false
    }

    this.handleEdicao = this.handleEdicao.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.toggleDone = this.toggleDone.bind(this)
  }

  handleEdicao() {
    this.setState({ 
      isEditing: true,
    })
  }

  onSubmitHandler(e) {
    e.preventDefault()
    
    this.props.editaTodo(this.props.id, this.state.task)
    this.setState({ isEditing: false })
  }

  onChangeHandler(evt) {
    this.setState(state => ({
      task: evt.target.value
  }))
  }

  toggleDone() {
    this.setState(state => ({
      isDone: !state.isDone
    }))
  }

  render() {
    return (
      <li className='Todo'>
          {!this.state.isEditing ? 
          <div onClick={this.toggleDone} className='container'>
            <span className={`descricaoTask ${this.state.isDone ? 'done' : ''}`} >
              {this.props.desc} 
            </span>
            <div>
              <FontAwesomeIcon className='pencil' onClick={this.handleEdicao} icon={faPencil} />
              <FontAwesomeIcon className='trashcan' onClick={this.props.removeTodo} icon={faTrashCan} />
            </div>
          </div>
          : 
            <div>
              <form onSubmit={this.onSubmitHandler}>
                <input onChange={this.onChangeHandler} name='desc' id='descEdt' value={this.state.task}/>
                <button>Edit</button>
              </form>
            </div>
          }
      </li>
    )
  }
}
