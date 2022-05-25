import React from 'react';
import PropTypes from 'prop-types';

export default class Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { obj } = this.props;
    let numbertoshow = 0;
    if (obj.next !== null) {
      numbertoshow = obj.next;
    } else if (obj.total !== null) { numbertoshow = obj.total; }
    return (
      <div className="screen">{numbertoshow}</div>
    );
  }
}
Screen.propTypes = {
  obj: PropTypes.shape({
    total: PropTypes.string,
    next: PropTypes.string,
    operation: PropTypes.string,
  }).isRequired,
};
