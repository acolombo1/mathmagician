import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
export default class Buttondouble extends React.Component {
  render() {
    return (
      // eslint-disable-next-line react/destructuring-assignment
      <div className={`buttondouble ${this.props.color}`}>{ this.props.name }</div>
    );
  }
}
Buttondouble.propTypes = { name: PropTypes.string.isRequired };
Buttondouble.propTypes = { color: PropTypes.string.isRequired };
