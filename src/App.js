import React, { Component } from 'react';
import Header from './components/Header/Header.js';
import UserProfile from './components/UserProfile/UserProfile.js';
import Footer from './components/Footer/Footer.js';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <Header name="Viktoriia"/>
        <main className="main">
          <UserProfile />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
