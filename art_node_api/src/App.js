import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

import { AppTitle, GridContainer, NavLink, AppHeader } from './styles';



class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      artObj: [], 
      artImgs: []
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
      <div key={i}>
        {/* {/* <p>{artObj.id}</p> */}
        {/* <p>{artObj.name}</p> */}
        {/* <img alt="art">{artObj._links.thumbnail.href}</img> */}
        {/* <p>{artObj.slug}</p> */}
        {/* <p>{artObj.image_versions}</p> */}
        </div> 
   )
  });

  let newArtImg = this.state.artObj.map((artObj, i) => {
    return(
      <div key={i}>
      <img src={artObj._links.thumbnail.href} alt="art"></img>
      </div>
    )
  })


    return (
      <div className="App">
          <AppTitle>fuck my life</AppTitle>
          <img src={logo} className="App-logo" alt="logo" />
        <NavLink>
          Home
          Home
          Hell
        </NavLink>
        
        
        
          <AppTitle>##############</AppTitle>
        
        {/* {newArtObj} */} 
        
       
        <GridContainer>{newArtImg}</GridContainer>
      



      </div>
    );
  }
}

export default App;
