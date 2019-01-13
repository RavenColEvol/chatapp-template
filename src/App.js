import React, { Component } from 'react';
import './App.css';
import './skeleton/normalize.css';
import './skeleton/skeleton.css';
import Header from './Components/Header';
import Main from './Components/Main';
import './css/Main.css';
import Footer from './Components/Footer';
import Display from './Components/Display';
import Chat from './Components/Chat';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Header />
        </div>
        <Display/>
        <Chat/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;
