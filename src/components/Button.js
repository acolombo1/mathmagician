import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pressed: false };
  }

  render() {
    const { color, name } = this.props;
    const { pressed } = this.state;
    if (pressed) {
      return (false);
    }
    return (
      <div className={`button ${color}`}>{ name }</div>
    );
  }
}
Button.propTypes = { name: PropTypes.string.isRequired };
Button.propTypes = { color: PropTypes.string.isRequired };
