import { connect } from 'react-redux';
import React, {Component} from 'react';
import First from '../components/First';

/*
return {
  value: state.dennis
};
*/

function mapStateToProps (state, ownProps) {
//
  // var pState = state; // { dennis: 0, alice: 0 }
  // var key = ownProps.name; // === 'dennis'

  // ownProps === { name: 'dennis', style: {} };
  // ownProps.name === ownProps['name'] === 'dennis'
  //
  // var obj = { 'name.lowercase': true }
  //
  // obj['name.lowercase'] obj.name-lowercase

  return {
    value: state[ownProps.name] // === 'dennis'
  };

}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    increment: () => dispatch({ type: `${ownProps.name}/INCREMENT` }),
    decrement: () => dispatch({ type: `${ownProps.name}/DECREMENT` }), // "dennis/DECREMENT"
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   increment: () => dispatch({type: 'INCREMENT'}),
//   decrement: () => dispatch({type: 'DECREMENT'})
// });


class FirstContainer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { value, increment, decrement, style } = this.props;

    return <First
      style={style}
      value={value}
      increment={increment}
      decrement={decrement}
    />
  }
}

FirstContainer = connect(mapStateToProps, mapDispatchToProps)(FirstContainer);

export default FirstContainer;
