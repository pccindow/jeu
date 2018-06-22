import PropTypes from 'prop-types';
import React from 'react';
var pluralize = require('pluralize');
window.pluralize = require('pluralize');

export default class Countdown extends React.Component {
  static propTypes = {
    seconds: PropTypes.number.isRequired, // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = { seconds: 60 };
    this.decreaseTime = this.decreaseTime.bind(this);
  }

  decreaseTime() {
    const newCount = this.state.seconds - 1;
    if (newCount >= 0) {
      this.setState({ seconds: newCount });
    } else {
      clearInterval(this.state.intervalID);
    }
  }

  componentDidMount(){
    const intervalID = setInterval(this.decreaseTime, 1000);
    // store intervalId in the state so it can be accessed later
    this.setState({intervalID: intervalID});
  }

  componentWillUnmount(){
    // use intervalID from the state to clear tne interval
    clearInterval(this.intervalID);
  }

  render() {
  const countdownRun = <h3>Compte à rebours : {`${this.state.seconds} ${pluralize('seconde', this.state.seconds)}`}</h3>
  const countdownFinish = <h3>Compte à rebours : C'est terminé</h3>
    return (
      <div>
        {(this.state.seconds == 0) ? countdownFinish : countdownRun}
      </div>
    );
  }
}
