import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Links } from './Links';
import { CreateLink } from './CreateLink';

class App extends Component {
  componentDidMount(){
    var query = `{
      feed{
        description
        url
      }
    }`;
    fetch('http://localhost:4000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      'Accept': 'application/json'
      },
      body: JSON.stringify({
        query
      })
    })
      .then(res => res.json())
      .then(res => console.log(res.data));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <CreateLink />
        <Links />
      </div>
    );
  }
}

export default App;
