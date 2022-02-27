import React, { Component } from 'react';
import { Posts } from './Component/Posts'

export class App extends Component{
  state = {
    posts: [
      {id: 'abc1', name: 'JS'},
      {id: 'abc2', name: 'React'},
      {id: 'abc3', name: 'Vue'},
    ],
  };
  deleteElem = (id) => {
    const find = this.state.posts.find(item => item.id === id);
    const index = this.state.posts.indexOf(find);
    this.setState({post: this.state.posts.splice(index, 1)});
  }
  render() {
    const { posts } = this.state;
    return ( <div>
              <Posts deleteElem={this.deleteElem} posts={posts}/>
            </div> )
  }
}
