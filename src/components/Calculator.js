import React from 'react';
import Row from './Row';
import LastRow from './LastRow';
import Screen from './Screen';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'calculator' };
  }

  render() {
    const { name } = this.state;
    return (
      <div className={name}>
        <Screen />
        <Row but1="AC" but2="+/-" but3="%" but4="÷" />
        <Row but1="7" but2="8" but3="9" but4="x" />
        <Row but1="4" but2="5" but3="6" but4="-" />
        <Row but1="1" but2="2" but3="3" but4="+" />
        <LastRow but1="0" but3="." but4="=" />
      </div>
    );
  }
}
