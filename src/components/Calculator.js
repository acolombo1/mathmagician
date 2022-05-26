import { useState } from 'react';
import Button from './Button';
import Screen from './Screen';

export default function Calculator() {
  const [obj, setState] = useState({ total: null, next: null, operation: null });

  const updateState = (newobj) => {
    setState(newobj);
  };

  return (
    <div className="calculator">
      <Screen obj={obj} />
      <div className="row">
        <Button name="AC" color="lightgray" liftUp={updateState} obj={obj} />
        <Button name="+/-" color="lightgray" liftUp={updateState} obj={obj} />
        <Button name="%" color="lightgray" liftUp={updateState} obj={obj} />
        <Button name="÷" color="orange" liftUp={updateState} obj={obj} />
      </div>
      <div className="row">
        <Button name="7" color="lightgray" liftUp={updateState} obj={obj} />
        <Button name="8" color="lightgray" liftUp={updateState} obj={obj} />
        <Button name="9" color="lightgray" liftUp={updateState} obj={obj} />
        <Button name="x" color="orange" liftUp={updateState} obj={obj} />
      </div>
      <div className="row">
        <Button name="4" color="lightgray" liftUp={updateState} obj={obj} />
        <Button name="5" color="lightgray" liftUp={updateState} obj={obj} />
        <Button name="6" color="lightgray" liftUp={updateState} obj={obj} />
        <Button name="-" color="orange" liftUp={updateState} obj={obj} />
      </div>
      <div className="row">
        <Button name="1" color="lightgray" liftUp={updateState} obj={obj} />
        <Button name="2" color="lightgray" liftUp={updateState} obj={obj} />
        <Button name="3" color="lightgray" liftUp={updateState} obj={obj} />
        <Button name="+" color="orange" liftUp={updateState} obj={obj} />
      </div>
      <div className="row">
        <Button width=" double" name="0" color="lightgray" liftUp={updateState} obj={obj} />
        <Button name="." color="lightgray" liftUp={updateState} obj={obj} />
        <Button name="=" color="orange" liftUp={updateState} obj={obj} />
      </div>
    </div>
  );
}
