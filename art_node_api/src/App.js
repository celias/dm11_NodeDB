import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InfoArt from './components/InfoArt';
import ArtList from './components/ArtList';

import axios from 'axios';


import { AppTitle, GridContainer, NavLink, AppHeader, ArtDiv, TradeMark, Header, Img, HoverZoom, Footer } from './styles';
let FontAwesome = require('react-fontawesome');


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      artObj: [], 
      artImgs: [],
      currID: undefined, 
      showInfo: false,
      likeTheArt: false,
      currLike: undefined
  }

  this.artImgInfo = this.artImgInfo.bind(this);
  this.LikeArt = this.LikeArt.bind(this);

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
   
    // axios.get('/api/apiData')
    //   .then(response => {
    //     this.setState({ artObj: response.data._embedded.artists })
    //   }).catch(console.log);
  }

  LikeArt(X){
    this.setState({currLike: X, likeTheArt: true})
  }



  

render() {
 console.log(this.state.artObj)
 console.log(this.artImgs)


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
       { this.state.showInfo && <InfoArt currItem={this.state.artObj[this.state.currID]} />} 
       </ArtDiv>
        <br />
        
        {/* {newArtObj} */} 
        
        
       
        <GridContainer>{newArtImg}</GridContainer>
      <Footer>
        {/* <i className="fab fa-github-alt" /> */}
        </Footer>
      </div>
    );
  }
}

export default App;
