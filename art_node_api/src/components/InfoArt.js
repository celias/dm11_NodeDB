import React from 'react';


const InfoArt = (props) => {
    console.log(props.currItem)
    return(
        <span >
        {props.currItem.slug}
        </span>
    )
}

export default InfoArt;