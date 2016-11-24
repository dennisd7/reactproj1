//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap';

var React = require('react')
var ReactDOM = require('react-dom')

//var express = require('express')
//app = express();

var FirstContainer = require('./containers/FirstContainer')

var HelloWorld = React.createClass({
  render: function(){
    return (
      <div>
        Hello World!
        <FirstContainer />
      </div>
    )
  }
});

ReactDOM.render(<HelloWorld />, document.getElementById('app'));
