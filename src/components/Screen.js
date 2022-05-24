import React from 'react';

export default class Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { result: 0 };
  }

  render() {
    const { result } = this.state;
    return (
      <div className="screen">{result}</div>
    );
  }
}
