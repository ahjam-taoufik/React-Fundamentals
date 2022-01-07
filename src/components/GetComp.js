import React, { Component } from "react";
import axios from "axios";

export default class GetComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      error:''
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((res) => {this.setState({ posts: res.data,});})
      .catch(err=>{
             this.setState({
                 error:'some thing were wrong'
             })
      })
  }

  render() {
    const { posts,error } = this.state;

    return (
      <div>
         <h2>you have {posts.length} posts in your database</h2>
         <hr/>
        {posts.length?posts.map((post) => (
          <h4 key={post.id}>{post.title}</h4>)): error  }
     
      </div>
    );
  }
}
