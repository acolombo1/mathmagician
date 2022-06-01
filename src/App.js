import React from 'react';
import './App.css';
import Calculator from './components/Calculator';
import Header from './components/Header';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'App' };
  }

  render() {
    const { name } = this.state;
    return (
      <>
        <Header />
        <div className="calcContainer">
          <h2 className="subtitle">
            Let&apos;s do some Math!
          </h2>
          <div className={name}>
            <Calculator />
          </div>
        </div>
      </>
    );
  }
}
