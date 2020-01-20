import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <header className="app__header">
        <form action="/actionpage.">
            <input type="text" name="city" placeholder="city" id="city"></input>
            <input type="button" value="Find weather" id="find"></input>
          </form>
        </header>
        <main className="app__main"></main>
      </div>
    );
  }
}
export default App;