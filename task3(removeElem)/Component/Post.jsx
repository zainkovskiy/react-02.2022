import React, {Component} from "react";

export class Post extends Component{
  render(){
    const {id, name, cb} = this.props;
    return(
        <div>
          <h2>{name}</h2>
          <button onClick={() => cb(id)}>delete</button>
        </div>
    )
  }
}