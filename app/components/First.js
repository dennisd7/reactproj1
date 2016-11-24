// Dennis Ding
//
// first component

var React = require('react');
var PropTypes = React.PropTypes;

function First (props) {
  return (
    <div>
      <p> Goodbye! </p>
      <button type="submit" className="btn btn-success" onClick={props.increment}>Increment</button>
      <button type="button" className="btn btn-danger" onClick={props.decrement}>Decrement</button>
      <h1>{props.header}</h1>
    </div>
  )
}

module.exports = First;
