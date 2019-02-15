import React, { Component } from 'react';
import TabbedDemos from './TabbedDemos'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>React Test App</h1>
        </header>
        <TabbedDemos />
      </div>
    );
  }
}

export default App;
