import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cytoscape from './components/Graph'

class App extends Component {
  render() {
    return (
      <div className="App">
            <Cytoscape />
      </div>
    );
  }
}

export default App;
