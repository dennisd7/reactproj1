var React = require('react');
var First = require('../components/First');
var counter = 0;

var FirstContainer = React.createClass({

  getInitialState: function() {
    return {
      header: 0
    }
  },

  handleIncrement: function() {
    console.log("HandleIncrement", this.props, this.state);
    this.setState({
      header: this.state.header + 1
    });
  },

  handleDecrement: function() {
    console.log("HandleDecrement");
    this.setState({
      header: this.state.header - 1
    });
  },

  render: function () {
    return (
      <First
        header={this.state.header}
        increment={this.handleIncrement}
        decrement={this.handleDecrement}
      />
    )
  }
});

module.exports = FirstContainer;
