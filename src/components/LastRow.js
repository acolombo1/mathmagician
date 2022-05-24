/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Buttondouble from './Buttondouble';

// eslint-disable-next-line react/prefer-stateless-function
export default class Row extends React.Component {
  render() {
    return (
      <div className="row">
        <Buttondouble name={`${this.props.but1}`} color="lightgray" />
        <Button name={`${this.props.but3}`} color="lightgray" />
        <Button name={`${this.props.but4}`} color="orange" />
      </div>
    );
  }
}
Row.propTypes = { but1: PropTypes.string.isRequired };
Row.propTypes = { but3: PropTypes.string.isRequired };
Row.propTypes = { but4: PropTypes.string.isRequired };
