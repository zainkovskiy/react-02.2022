import { Post } from './Post'
import React, {Component} from "react";

export class Posts extends Component{
  render(){
  const { posts, deleteElem } = this.props;
  return(
      <div>
        {
          posts.map(post =>
              <Post cb={deleteElem} key={post.id} id={post.id} name={post.name}/>
          )
        }
      </div>)
}
}