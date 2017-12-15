import React, { Component } from 'react';
import './App.css';
import FontAwesome from 'react-fontawesome';

const Time = () => {
  <span className="time">3h ago</span>
}

class Message extends Component {
  render() {
    return (
      <div className="message">
        Lately I have been enjoying making bits of react components. This is less than 140 character! <span className="code">#100daysofCODE</span>
      </div>
    );
  }
}

class NameWithHandle extends Component {
  render() {
    return (
      <div className="name-with-handle">
        <h4 className="name">DiomedesLajara</h4>
        <p className="handle">@diomedeslajara</p>
    </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="tweet-container">
          <FontAwesome name='rocket' className="Avatar" />
          <div className="tweet">
            <NameWithHandle />
            <Message />        
          </div>
        </div>
      </div>
    );
  }
}

export default App;
