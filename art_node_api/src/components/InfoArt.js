import React from 'react';
import { NameDiv, BioDiv, LocationDiv } from '../styles';


const InfoArt = (props) => {
    console.log(props.currItem)
    return(
        <div>
       <NameDiv>{props.currItem.sortable_name}</NameDiv>
        <LocationDiv>{props.currItem.location}</LocationDiv>
        <br />
        <BioDiv>{props.currItem.biography}</BioDiv>
        </div>
    )
}

export default InfoArt;