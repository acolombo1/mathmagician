import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
export default class Button extends React.Component {
  render() {
    return (
      // eslint-disable-next-line react/destructuring-assignment
      <div className={`button ${this.props.color}`}>{ this.props.name }</div>
    );
  }
}
Button.propTypes = { name: PropTypes.string.isRequired };
Button.propTypes = { color: PropTypes.string.isRequired };
