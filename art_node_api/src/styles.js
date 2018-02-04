
import styled from 'styled-components';

export const AppTitle = styled.h1`
font-size: 1.5em;
color: palevioletred;
`

export const GridContainer = styled.div`
display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  grid-auto-rows: minmax(150px, auto);
grid-column-row: span 5;
cursor: pointer;
margin-right: 5%;

`

export const NavLink = styled.nav`
display: grid;
grid-template-colums: (2 10%);
border: white solid 3px;
color: white;
`

export const AppHeader = styled.header`
max-width: 940px;
  margin: 0 20px;
  display: grid;
  grid-gap: 10px;
`