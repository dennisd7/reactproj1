// Dennis Ding
//
// first component

import React, { Component, PropTypes } from 'react'

class First extends Component {
  render() {
    const { value, increment, decrement, style } = this.props

    return (
      <div style={style}>
        <p> Goodbye! </p>
        <button type="submit" className="btn btn-success" onClick={increment}>Increment</button>
        <button type="button" className="btn btn-danger" onClick={decrement}>Decrement</button>
        <h1>{value}</h1>
      </div>
    )
  }
}

export default First
