import { useState } from 'react';
import Button from './Button';
import Screen from './Screen';

export default function Calculator() {
  const [obj, setState] = useState({ total: null, next: null, operation: null });

  const bclick = (newobj) => {
    setState(newobj);
  };

  return (
    <div className="calculator">
      <Screen obj={obj} />
      <div className="row">
        <Button name="AC" color="lightgray" bclick={bclick} obj={obj} />
        <Button name="+/-" color="lightgray" bclick={bclick} obj={obj} />
        <Button name="%" color="lightgray" bclick={bclick} obj={obj} />
        <Button name="÷" color="orange" bclick={bclick} obj={obj} />
      </div>
      <div className="row">
        <Button name="7" color="lightgray" bclick={bclick} obj={obj} />
        <Button name="8" color="lightgray" bclick={bclick} obj={obj} />
        <Button name="9" color="lightgray" bclick={bclick} obj={obj} />
        <Button name="x" color="orange" bclick={bclick} obj={obj} />
      </div>
      <div className="row">
        <Button name="4" color="lightgray" bclick={bclick} obj={obj} />
        <Button name="5" color="lightgray" bclick={bclick} obj={obj} />
        <Button name="6" color="lightgray" bclick={bclick} obj={obj} />
        <Button name="-" color="orange" bclick={bclick} obj={obj} />
      </div>
      <div className="row">
        <Button name="1" color="lightgray" bclick={bclick} obj={obj} />
        <Button name="2" color="lightgray" bclick={bclick} obj={obj} />
        <Button name="3" color="lightgray" bclick={bclick} obj={obj} />
        <Button name="+" color="orange" bclick={bclick} obj={obj} />
      </div>
      <div className="row">
        <Button width=" double" name="0" color="lightgray" bclick={bclick} obj={obj} />
        <Button name="." color="lightgray" bclick={bclick} obj={obj} />
        <Button name="=" color="orange" bclick={bclick} obj={obj} />
      </div>
    </div>
  );
}
