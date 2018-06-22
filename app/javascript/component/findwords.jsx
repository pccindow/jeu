import PropTypes from 'prop-types';
import React from 'react';

export default class FindWords extends React.Component {
  static propTypes = {
    words: PropTypes.node.isRequired, // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = words;

  }

  render() {
    return (
    <div>
    {this.state} test
    </div>
    );
  }
}
