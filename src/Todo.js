import React, { Component } from 'react'

export default class Todo extends Component {
  render() {
    return (
      <div>
          <div>
              {this.props.desc} 
          </div>
          <button onClick={this.props.removeTodo}>X</button>
      </div>
    )
  }
}
