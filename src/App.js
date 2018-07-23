import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import store from './store'
import GameListContainer from './components/GameListContainer'
import {Route, Link} from 'react-router-dom'
//we also need a link whih leads to /hangman

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          <h1> 
            Hello there!
          <Link>
          </Link>
            </h1>
          </p>
          <Route exact path="/" component={GameListContainer} />
        </div>
        <GameListContainer/>
      </Provider>
    );
  }}

export default App;
