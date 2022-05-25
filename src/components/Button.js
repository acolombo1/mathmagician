import React from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.buttonclick = this.buttonclick.bind(this);
    this.keypressed = this.keypressed.bind(this);
  }

  keypressed() {
    this.buttonclick();
  }

  buttonclick() {
    const { obj, name, bclick } = this.props;
    const newobj = calculate(obj, name);
    bclick(newobj);
  }

  render() {
    const { width, color, name } = this.props;
    return (
      <div
        className={`button${width} ${color}`}
        onKeyPress={this.keypressed}
        role="button"
        tabIndex={0}
        onClick={this.buttonclick}
      >
        { name }
      </div>
    );
  }
}
Button.propTypes = {
  obj: PropTypes.shape({
    total: PropTypes.string,
    next: PropTypes.string,
    operation: PropTypes.string,
  }).isRequired,
};
Button.propTypes = { bclick: PropTypes.func.isRequired };
Button.propTypes = { name: PropTypes.string.isRequired };
Button.propTypes = { color: PropTypes.string.isRequired };
Button.propTypes = { width: PropTypes.string };
Button.defaultProps = { width: '' };
