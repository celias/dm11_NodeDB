
import styled from 'styled-components';

export const AppTitle = styled.h1`
font-size: 1.5em;
color: palevioletred;
`

export const GridContainer = styled.div`
display: grid;
grid-template-columns: repeat(8, 100%);
grid-template-rows: repeat(8, 100%);
grid-column-end: span 8;
grid-column-row: span 8;
cursor: pointer;
border: black solid 5px;
display: flex;
justify-content: center;
flex-flow: row wrap;
padding: 70px;
`

export const NavLink = styled.nav`
display: grid;
grid-template-colums: repeat(4 10%);
border: black solid 3px;
`