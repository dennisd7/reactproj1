import React, {Component} from 'react';
import FirstComponent from '../components/First';

class FirstContainer extends Component {

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

  render () {
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
