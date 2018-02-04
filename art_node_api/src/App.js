import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';



class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      artObj: []
  }

};

  componentDidMount(){ //Asynchronous requests
    axios.get('/api/apiData')
    .then(response => {
      console.log(response.data)
      this.setState({ artObj: response.data._embedded.artists }) 
    }).catch(console.log);
  }

render() {
 console.log(this.state.artObj)
 
 let newArtObj = this.state.artObj.map((artObj, i) => {
   return(
      <div key={i} >
        <p>{artObj.id}</p>
        <p>{artObj.name}</p>
        <p>{artObj.slug}</p>
       
        </div> 
   )
  });


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">fuck my life</h1>
        </header>
        
        <p className="App-intro">
        
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {newArtObj}
      



      </div>
    );
  }
}

export default App;
