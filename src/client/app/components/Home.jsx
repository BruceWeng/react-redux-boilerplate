import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, incrementAmount } from '../actions/actions';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>Home</p>

        <div>
          <form onSubmit={ this.props.handleIncrementAmount }>
            <input type="number" placeholder="Enter an amount to add."/>
            <button type="submit">Submit</button>
          </form>

          Clicked: <span id="value">{ this.props.counter }</span>
          <button onClick={ this.props.handleIncrement }>+</button>
          <button onClick={ this.props.handleDecrement }>-</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({counter: state.counter});

const mapDispatchToProps = (dispatch) => {
  return {
    handleIncrement: () => {
      dispatch(increment());
    },
    handleDecrement: () => {
      dispatch(decrement());
    },
    handleIncrementAmount: (event) => {
      event.preventDefault();
      dispatch(incrementAmount(5));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
