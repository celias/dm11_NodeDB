import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';



class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      artObj: [],
      randomArt: []
  }

  this.artObj = this.artObj.bind(this);
  // this.randomArt = this.randomArt.bind(this);
};

  componentDidMount(){ //Asynchronous requests
    axios.get('/api/apiData')
    .then(response => {
      this.setState({ artObj: response.data })
    }).catch(console.log);
  }

  artObj(){
   axios.get('/api/getSomeArt')
    .then(response => {
    this.setState({ artObj: response.data })
   }).catch(console.log);
}

  // randomArt(){
  //   axios.get('/api/getSomeRandomArt')
  //    .then(response => {
  //      this.setState({ randomArt: response.data })
  //    }).catch(console.log);
  // }

render() {
 console.log(this.state.artObj)


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">fuck my life</h1>
        </header>
        {/* <h1 className="App-intro">{this.state.artObj}</h1> */}
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      



      </div>
    );
  }
}

export default App;
