import './App.css';
import Nav from './components/Nav/Nav';
import Categories from './components/Categories/Categories';
import NavBarTrends from './components/NavBarTrends/NavBarTrends';
import Insights from './components/Insights/Insights';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import React, {Component} from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      state: "",
    }
    this.stateHandler = this.stateHandler.bind(this)
  }

  stateHandler(e, state) {
    if(state === "category") {
      this.setState({
        state: "category"
      }) 
    } else {
      this.setState({
        state: "",
      })
    }

  }
  render() {
    document.title="Shutterstock-Contributor"
    return (
      <div className="App">
        <Nav/>
        <NavBarTrends state={this.state.state} stateHandler={this.stateHandler}/>
        {this.state.state? <Categories/>:<Insights/>}    
  
      </div>
    );

  }
}

export default App;