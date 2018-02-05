import React from 'react';

const ArtList = (props) => {
    console.log(props.currLike)
    return(
        <button onClick={props.currLike}>Like</button>
    )
}
export default ArtList;