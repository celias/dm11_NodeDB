
import styled from 'styled-components';

export const AppTitle = styled.h1`
font-size: 55px;
color: white;
font-weight: 700;
font-family: 'Shrikhand', cursive;
display: flex;

margin: 0 auto;
margin-left: 5%;
margin-top: 3%;
`

export const GridContainer = styled.div`
display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  grid-auto-rows: minmax(150px, auto);
grid-column-row: span 5;
cursor: pointer;
margin-right: 5%;
margin-left: 5%;
overflow: hidden;
overflow-x: hidden;
`

// export const NavLink = styled.nav`
// display: grid;
// grid-template-columns: (2, 30%);
// border: white solid 3px;
// color: white;
// `

export const AppHeader = styled.header`
max-width: 10px;
  margin: 0 20px;
  display: grid;
  grid-template-rows: (3, 10%);
  grid-gap: 10px;
`

export const ArtDiv = styled.div`
margin-left 4%;
background-color: black;
color: white;
padding: 12px;
max-width: 1000px;
max-height: 1000px;
  
  display: grid;
  grid-template-rows: (3, 10%);
  grid-gap: 10px
`
export const NameDiv = styled.p`
font-size: 32px;
font-family: 'Roboto Condensed', sans-serif;
text-decoration: underline;
`
export const BioDiv = styled.p`
font-size: 18px;
line-height: 1.6;
font-family: 'Roboto', sans-serif;
`
export const LocationDiv = styled.p`
font-size: 20px;
font-family: 'Roboto', sans-serif;
`
export const TradeMark = styled.p`
display: flex;
align-self: flex-start;
margin-right: 1630px;
margin-top: 3.5%;
color: white;
font-size: 20px;
`
export const Header = styled.header`
display: flex;
align-items: flex-start;
flex-wrap: no-wrap;

`
