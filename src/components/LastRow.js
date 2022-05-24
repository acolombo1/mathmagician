import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Buttondouble from './Buttondouble';

export default class Row extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'row' };
  }

  render() {
    const { name } = this.state;
    const { but1, but3, but4 } = this.props;
    return (
      <div className={name}>
        <Buttondouble name={`${but1}`} color="lightgray" />
        <Button name={`${but3}`} color="lightgray" />
        <Button name={`${but4}`} color="orange" />
      </div>
    );
  }
}
Row.propTypes = { but1: PropTypes.string.isRequired };
Row.propTypes = { but3: PropTypes.string.isRequired };
Row.propTypes = { but4: PropTypes.string.isRequired };
