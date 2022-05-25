import React from 'react';
import PropTypes from 'prop-types';

export default class Buttondouble extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pressed: false };
  }

  render() {
    const { color, name } = this.props;
    const { pressed } = this.state;
    if (pressed) { return false; }
    return (
      <div className={`buttondouble ${color}`}>{ name }</div>
    );
  }
}
Buttondouble.propTypes = { name: PropTypes.string.isRequired };
Buttondouble.propTypes = { color: PropTypes.string.isRequired };
