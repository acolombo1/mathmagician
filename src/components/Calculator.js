import React from 'react';
import Button from './Button';
import Screen from './Screen';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { obj: { total: null, next: null, operation: null } };
    this.bclick = this.bclick.bind(this);
  }

  bclick(newobj) {
    this.setState({ obj: newobj });
  }

  render() {
    const { obj } = this.state;
    return (
      <div className="calculator">
        <Screen obj={obj} />
        <div className="row">
          <Button name="AC" color="lightgray" bclick={this.bclick} obj={obj} />
          <Button name="+/-" color="lightgray" bclick={this.bclick} obj={obj} />
          <Button name="%" color="lightgray" bclick={this.bclick} obj={obj} />
          <Button name="÷" color="orange" bclick={this.bclick} obj={obj} />
        </div>
        <div className="row">
          <Button name="7" color="lightgray" bclick={this.bclick} obj={obj} />
          <Button name="8" color="lightgray" bclick={this.bclick} obj={obj} />
          <Button name="9" color="lightgray" bclick={this.bclick} obj={obj} />
          <Button name="x" color="orange" bclick={this.bclick} obj={obj} />
        </div>
        <div className="row">
          <Button name="4" color="lightgray" bclick={this.bclick} obj={obj} />
          <Button name="5" color="lightgray" bclick={this.bclick} obj={obj} />
          <Button name="6" color="lightgray" bclick={this.bclick} obj={obj} />
          <Button name="-" color="orange" bclick={this.bclick} obj={obj} />
        </div>
        <div className="row">
          <Button name="1" color="lightgray" bclick={this.bclick} obj={obj} />
          <Button name="2" color="lightgray" bclick={this.bclick} obj={obj} />
          <Button name="3" color="lightgray" bclick={this.bclick} obj={obj} />
          <Button name="+" color="orange" bclick={this.bclick} obj={obj} />
        </div>
        <div className="row">
          <Button width=" double" name="0" color="lightgray" bclick={this.bclick} obj={obj} />
          <Button name="." color="lightgray" bclick={this.bclick} obj={obj} />
          <Button name="=" color="orange" bclick={this.bclick} obj={obj} />
        </div>
      </div>
    );
  }
}
