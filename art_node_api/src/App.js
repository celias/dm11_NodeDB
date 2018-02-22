import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import InfoArt from './components/InfoArt';
import AddToList from './components/AddToList';

import axios from 'axios';


import { AppTitle, GridContainer, NavLink, AppHeader, ArtDiv, TradeMark, Header, Img, HoverZoom, Footer } from './styles';



class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      artObj: [], 
      artImgs: [],
      currID: undefined, 
      showInfo: false,
  }

  this.artImgInfo = this.artImgInfo.bind(this);
  this.addArt = this.addArt.bind(this)

};

  componentDidMount(){ //Asynchronous requests
    axios.get('/api/apiData')
    .then(response => {
      console.log(response.data)
      this.setState({ artObj: response.data._embedded.artists }) 
    }).catch(console.log);
  }

  artImgInfo(ID){
    this.setState({currID: ID, showInfo: true})
  }
  
  addArt(item){
    axios.post(`/api/art/${item.id}`,
  {img: item._links.thumbnail.href, name: item.name}

)
    .then(response => {
        console.log(response.data)
      
    })
    .catch(console.log)
  }





render() {
let newArtObj = this.state.artObj.map((artObj, i) => {

   return(
      <div key={i} />
  
       
   )
  });

  let newArtImg = this.state.artObj.map((artObj, i) => {
    console.log(this.state.artObj)
    return(

      <div key={i}>
      
      <Img onClick={()=>this.artImgInfo(i)} src={artObj._links.thumbnail.href} alt="art"></Img>
      
      </div>
    )
  });


    return (
      <div className="App">
      <Header>
          <AppTitle>Found.</AppTitle>
          <TradeMark>&trade;</TradeMark>
      </Header>  
        {/* <NavLink>
          Home
          Home
          Hell
        </NavLink> */}
        
        <ArtDiv> 
       { this.state.showInfo && <InfoArt addArt={this.addArt} currItem={this.state.artObj[this.state.currID]} />} 
       </ArtDiv>
        <br />
        
        
       
        
    
        
    <GridContainer>{newArtImg}</GridContainer>
      
      
      <Footer />
        
       
      </div>
    );
  }
}

export default App;