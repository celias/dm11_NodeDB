import React, { Component } from 'react';
import axios from 'axios';

class AddToList extends Component {
    constructor(props){
        super(props);


}

// new

    render(){
        
        console.log(this.props.favorited);
        return(
            <div>
                <button onClick={()=>this.props.addArt(this.props.favorited)}>Add Art</button>
                </div>
        )
    }
}

export default AddToList;